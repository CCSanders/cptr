import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    State,
    TapGestureHandler,
    TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

import Reanimated, {
    cancelAnimation,
    Easing,
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    withSpring,
    withTiming,
    useAnimatedGestureHandler,
    useSharedValue,
    withRepeat,
} from 'react-native-reanimated';

import type { Camera, PhotoFile, TakePhotoOptions, TakeSnapshotOptions, VideoFile } from 'react-native-vision-camera';
import { createAsyncDelay } from '../../../utils';

const CAPTURE_BUTTON_SIZE = 78;
const BORDER_WIDTH = CAPTURE_BUTTON_SIZE * 0.1;

interface Props extends ViewProps {
    camera: React.RefObject<Camera>;
    onCapture: (photo_array: PhotoFile[]) => void;

    enabled: boolean;
    setIsPressingButton: (isPressingButton: boolean) => void;
};

const CaptureButton: React.FC<Props> = ({
    camera,
    onCapture,
    enabled,
    setIsPressingButton,
    style,
    ...props
}): React.ReactElement => {

    const isPressingButton = useSharedValue(false);

    const takeCPTR = useCallback(async () => {
        try {

            if (camera.current == null) {
                throw new Error('Camera ref is null within CaptureButton.tsx');
            }

            //Todo: additional log context?
            console.log('Taking photo...');

            await createAsyncDelay(100);

            // play flash effect

            const photo1 = await camera.current.takePhoto({
                qualityPrioritization: 'balanced',
            });

            await createAsyncDelay(100);

            // play flash effect

            const photo2 = await camera.current.takePhoto({
                qualityPrioritization: 'balanced',
            });

            await createAsyncDelay(100);

            // play flash effect

            const photo3 = await camera.current.takePhoto({
                qualityPrioritization: 'balanced',
            });

            await createAsyncDelay(100);

            // play flash effect

            const photo4 = await camera.current.takePhoto({
                qualityPrioritization: 'balanced',
            });

            const photo_array = [photo1, photo2, photo3, photo4];

            onCapture(photo_array);

        } catch (error) {
            console.error("Failed to take a photo: ", error)
        }
    }, [camera, onCapture])

    const tapHandler = useRef<TapGestureHandler>();
    const onHandlerStateChanged = useCallback(
        async ({ nativeEvent: event }: TapGestureHandlerStateChangeEvent) => {
            switch (event.state) {
                case State.BEGAN: {
                    console.log('Capture button pressed.')
                    setIsPressingButton(true);
                }
                case State.END:
                case State.FAILED:
                case State.CANCELLED: {
                    console.log('Capture button released. Begin GIF capture')
                    try {
                        await takeCPTR();
                    } finally {
                        setTimeout(() => {
                            isPressingButton.value = false;
                            setIsPressingButton(false);
                        }, 500);
                    }
                }
                default:
                    break;
            }
        },
        [isPressingButton, setIsPressingButton, takeCPTR]
    );

    const buttonStyle = useAnimatedStyle(() => {
        let scale: number;
        if (enabled) {
            if (isPressingButton.value) {
                scale = withRepeat(
                    withSpring(1, {
                        stiffness: 100,
                        damping: 1000,
                    }),
                    -1,
                    true,
                );
            } else {
                scale = withSpring(0.9, {
                    stiffness: 500,
                    damping: 300,
                });
            }
        } else {
            scale = withSpring(0.6, {
                stiffness: 500,
                damping: 300,
            });
        }

        return {
            opacity: withTiming(enabled ? 1 : 0.3, {
                duration: 100,
                easing: Easing.linear,
            }),
            transform: [
                {
                    scale: scale,
                },
            ],
        };
    }, [enabled, isPressingButton]);

    const shadowStyle = useAnimatedStyle(
        () => ({
            transform: [
                {
                    scale: withSpring(isPressingButton.value ? 1 : 0, {
                        mass: 1,
                        damping: 35,
                        stiffness: 300,
                    }),
                },
            ],
        }),
        [isPressingButton],
    );

    return (
        <TapGestureHandler
            enabled={enabled}
            ref={tapHandler}
            onHandlerStateChange={onHandlerStateChanged}
            shouldCancelWhenOutside={false}
        >
            <Reanimated.View {...props} style={[buttonStyle, style]}>
                <Reanimated.View style={styles.flex}>
                    <Reanimated.View style={[styles.shadow, shadowStyle]} />
                    <View style={styles.button} />
                </Reanimated.View>
            </Reanimated.View>
        </TapGestureHandler>
    );
};

export default CaptureButton;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    shadow: {
        position: 'absolute',
        width: CAPTURE_BUTTON_SIZE,
        height: CAPTURE_BUTTON_SIZE,
        borderRadius: CAPTURE_BUTTON_SIZE / 2,
        backgroundColor: '#e34077',
    },
    button: {
        width: CAPTURE_BUTTON_SIZE,
        height: CAPTURE_BUTTON_SIZE,
        borderRadius: CAPTURE_BUTTON_SIZE / 2,
        borderWidth: BORDER_WIDTH,
        borderColor: 'white',
    },
});