function openLeetCodeProfile() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Please enter a username!");
        return;
    }

    const profileURL = `https://leetcode.com/u/${username}/`;
    window.open(profileURL, "_blank");
}


// Fetch LeetCode Stats API
async function loadStats() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Please enter a username first!");
        return;
    }

    const apiURL = `https://leetcode-stats-api.herokuapp.com/${username}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.status === "error") {
            alert("Username not found!");
            return;
        }

        const easy = data.easySolved / data.totalEasy * 100;
        const medium = data.mediumSolved / data.totalMedium * 100;
        const hard = data.hardSolved / data.totalHard * 100;

        document.getElementById("easyBar").style.width = easy + "%";
        document.getElementById("mediumBar").style.width = medium + "%";
        document.getElementById("hardBar").style.width = hard + "%";

        document.getElementById("easyPercent").innerText = easy.toFixed(1) + "%";
        document.getElementById("mediumPercent").innerText = medium.toFixed(1) + "%";
        document.getElementById("hardPercent").innerText = hard.toFixed(1) + "%";

    } catch (error) {
        alert("Error loading stats!");
    }
}
