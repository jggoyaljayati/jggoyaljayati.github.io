document.addEventListener("DOMContentLoaded", function () {});

function getWriting(event) {
	var el = document.getElementById("lettername");
	while (el?.firstChild) el.removeChild(el.firstChild);
	var vara = new Vara(
		".lettername",
		"https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
		[
			{
				text: "Jayati Goyal",
				y: 70,
				fromCurrentPosition: { y: false },
				duration: 3000,
			},
		],
		{
			strokeWidth: 2,
			color: "#523c33",
			fontSize: 56,
			textAlign: "center",
		}
	);
}
