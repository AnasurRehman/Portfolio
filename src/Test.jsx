import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Test = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    // <div>
    //   <p>Microphone: {listening ? "on" : "off"}</p>
    //   <button onClick={SpeechRecognition.startListening}>Start</button>
    //   <button onClick={SpeechRecognition.stopListening}>Stop</button>
    //   <button onClick={resetTranscript}>Reset</button>
    //   <p>{transcript}</p>
    // </div>
    <>
      <Box
        sx={{
          backgroundColor: "blue",
          height: "150px",
          width: "150px",
          borderRadius: "50%",
        }}
      >
        <Button onClick={SpeechRecognition.startListening}>mic</Button>
        <Typography>Microphone: {listening ? "on" : "off"}</Typography>
      </Box>
      <Typography>{transcript}</Typography>
    </>
  );
};

export default Test;
