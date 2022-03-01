import { PhotoFile } from 'react-native-vision-camera';
import RNFS from 'react-native-fs';

const images_to_cptr_pipeline_2 = (image_array: PhotoFile[], output_path: string) => {
    return "-f image2 -framerate 10" +
        " -i " + image_array[0].path +
        " -i " + image_array[1].path +
        " -i " + image_array[2].path +
        " -i " + image_array[3].path +
        " -i " + image_array[3].path +
        " -i " + image_array[2].path +
        " -i " + image_array[1].path +
        " -i " + image_array[0].path +
        " -vf \"scale=640:-1:flags=lanczos,transpose=1,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse\" " +
        output_path;
}

const images_to_cptr_pipeline = async (image_array: PhotoFile[], output_path: string) => {

    for (var i = 0, j = 7; i < image_array.length; i++, j--) {
        var filePath = `${RNFS.DocumentDirectoryPath}/image_` + i + ".jpeg";
        var filePathMirror = `${RNFS.DocumentDirectoryPath}/image_` + j + ".jpeg"

        var fileAlreadyExists = await RNFS.exists(filePath)
        if(fileAlreadyExists){
            console.log("deleting existing file ", filePath);
            await RNFS.unlink(filePath)
        }

        var fileMirrorAlreadyExists = await RNFS.exists(filePathMirror)
        if(fileMirrorAlreadyExists){
            console.log("deleting existing file ", filePathMirror);
            await RNFS.unlink(filePathMirror)
        }

        await RNFS.moveFile(image_array[i].path, filePath);
        await RNFS.copyFile(filePath, filePathMirror);
    }

    return "-f image2 -framerate 10" +
        " -i " +  `${RNFS.DocumentDirectoryPath}/image_%d.jpeg` +
        " -vf \"scale=640:-1:flags=lanczos,transpose=1,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse\" " +
        output_path;
}

export { images_to_cptr_pipeline }