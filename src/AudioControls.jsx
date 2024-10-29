import React, {useState } from "react";
//import { ReactComponent as Play } from "./assets/play.svg";
//import { ReactComponent as Pause } from "./assets/pause.svg";
//import { ReactComponent as Next } from "./assets/next.svg";
//import { ReactComponent as Prev } from "./assets/prev.svg";

function AudioControls ({
	isPlaying,
	onPlayPauseClick,
	onPrevClick,
	onNextClick
}) {
	let [selectFile, setSelectFile] = useState("");
	let inputRef = React.createRef();

	function onChangeAudioFile(e){
		setSelectFile((s) => e.target.files[0])
		console.log(e.target.files[0]);
		//this.setState({ selectedFile: e.target.files[0] }, () => {
		//	console.log(this.state.selectedFile)
		//});

		// pass file to props to make it available to parent component
		var data = e.target.files[0];
		//this.props.AudioFileCallback(data);

		//console.log (data)
	}


	//function onClickResetAudioFile(e) {
	//	this.setState({ selectedFile: null }); // celears state
	//	this.inputRef.current.value = "" // clears form

	//}




return	<div className="audio-controls">
		<button
			type="button"
			className="prev"
			aria-label="Previous"
			onClick={onPrevClick}
		>
			Prev
		</button>
		{isPlaying ? (
			<button
				type="button"
				className="pause"
				onClick={() => onPlayPauseClick(false)}
				aria-label="Pause"
			>
				Pause
			</button>
		) : (
			<button
				type="button"
				className="play"
				onClick={() => onPlayPauseClick(true)}
				aria-label="Play"
			>
				Play
			</button>
		)}
		<button
			type="button"
			className="next"
			aria-label="Next"
			onClick={onNextClick}
		>
			Next
		</button>
		<div>
			<input type="file" onChange={onChangeAudioFile} ref={inputRef} />
		</div>

	</div>
};

export default AudioControls;
