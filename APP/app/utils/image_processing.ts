import { PhotoFile } from 'react-native-vision-camera';

const images_to_cptr_pipeline = (image_array: PhotoFile[], output_path: string) => {
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

export { images_to_cptr_pipeline }