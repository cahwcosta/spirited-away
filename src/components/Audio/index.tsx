const Audio = () => {
  return (
    <audio autoPlay={true}>
      <source src="./songs/one-summers-day.mp3" type="audio/mpeg"/>
    </audio>
  )
}

export default Audio;