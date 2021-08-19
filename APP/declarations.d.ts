//This file is to fix image assets not being found in @app/assets/... 

declare module '*.png';
declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';
    const content: React.FunctionComponent<SvgProps>;
    export default content;
}