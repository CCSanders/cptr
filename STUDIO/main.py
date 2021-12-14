import ffmpeg
import sys
import json

print("Welcome to CPTR Image Pipeline Studio")

while True:
    
    command = input("> ")

    if (command is None or command == "exit"):
        print("Thanks for using CPTR Image Pipeline Studio. Goodbye!")
        sys.exit()
    elif (command == "video_info"):
        file_name = input("Please input a file name to view FFMPEG info on a video: ")
        print(file_name)
        
        try:
            probe = ffmpeg.probe(file_name)
        except ffmpeg.Error as e:
            print(e.stderr, file=sys.stderr)
            sys.exit(1)

        video_stream = next((stream for stream in probe['streams'] if stream['codec_type'] == 'video'), None)

        if video_stream is None:
            print('No video stream found', file=sys.stderr)
        else:
            print(json.dumps(video_stream, indent=2, sort_keys=False))
    elif (command == "build_looping_gif"):
        
        file_name = input("Please input the matching filename wildcard of the images you want to convert to a GIF (i.e. assets/cptr/stills/image_%d.jpeg): ")

        try:
            stream = ffmpeg.input(file_name, format='image2', framerate=10)
            stream = ffmpeg.filter(stream, 'scale', 480, -1, flags='lanczos')
            #stream = ffmpeg.filter(stream, 'transpose', 1)
            split = ffmpeg.filter_multi_output(stream, 'split')
            pallete = ffmpeg.filter(split[0], 'palettegen')
            stream = ffmpeg.filter([split[1], pallete], 'paletteuse')
            stream = ffmpeg.output(stream, 'out/out.gif')
            ffmpeg.run(stream)
        except ffmpeg.Error as e:
            print(e.stderr, file=sys.stderr)
            sys.exit(1)

    elif (command == 'help'):
        print('This is an internal CPTR tool to build and test filter graphs. Currently implemented commands are: build_looping_gif, video_info')
    else:
        print("Unknown command '" + command + "'. Try again.")
