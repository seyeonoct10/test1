const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine","ejs");

const profile = {
	name: "정세연",
	school: "인하공전전문대학교 정보통신공학과",
	studentid: "202308035",
	foods:["카레","치킨","만두"],
	character: "치이카와,카니"
};

app.get("/profile", (req, res) => {
	res.render("test", {
		title:"과제용 프로필",
		profile: profile
	});
});

app.get("/", (req,res) => {
	res.send('<a href="/profile"> 프로필 확인</a>');
});

app.listen(PORT, () => {
	console.log(`서버 실행 중: http://localhost:${PORT}`);
});
