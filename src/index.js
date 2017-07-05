export const bowling_game = (...rolls) => {

    let isSpare = (currentFrame) => {
        return frameTotal(currentFrame) === 10;
    }

    let isStrike = (currentFrame) => {
        return currentFrame.length === 1;
    }

    let frameTotal = (frame) => {
        return frame[0] + frame[1];
        // return frame.reduce((acc, val) => {
        //     return acc + val;
        // })
    }

    let totalScore = 0;
    let frameArray = frames.apply(this, rolls);

    for (let currentFrameIndex = 0; frameArray.length > currentFrameIndex; currentFrameIndex++) {
        let currentFrame = frameArray[currentFrameIndex];
        let nextFrame = frameArray[currentFrameIndex + 1]
        let twoFramesAhead = frameArray[currentFrameIndex + 2];

        if (!isStrike(currentFrame)) {
            totalScore += frameTotal(currentFrame);
        }
        if (isSpare(currentFrame)) {
            totalScore += frameTotal(currentFrame);
            totalScore += nextFrame[0];
        }
        if (isStrike(currentFrame)) {
            totalScore += currentFrame[0];
            if (currentFrame[0] === 10) {
                if (nextFrame.length === 1) {
                    totalScore += nextFrame[0] + twoFramesAhead[0];
                } else {
                    totalScore += nextFrame[0] + nextFrame[1];
                    if (nextFrame.length === 3) {
                        totalScore += nextFrame[2];
                    }
                }
            }
        }



        // totalScore = totalScore + frameArray;

        // if (isOdd(currentRoll) && rolls[currentRoll - 1] + rolls[currentRoll] == 10) {
        //     totalScore += rolls[currentRoll + 1];
        // }

        // if (!isOdd(currentRoll) && rolls[currentRoll] === 10) {
        //     totalScore += rolls[currentRoll + 1] + rolls[currentRoll + 2];
        // }
    }
    return totalScore;

}

export const handleStrike = () => {

}

export const frames = (...rolls) => {
    let frameArray = [];

    for (let currentRoll = 0; currentRoll < rolls.length; currentRoll++) {

        if (currentRoll + 1 === rolls.length || rolls[currentRoll] === 10) {
            frameArray.push([rolls[currentRoll]])
        } else {
            frameArray.push([rolls[currentRoll], rolls[currentRoll + 1]]);
            currentRoll++;
        }

        //Bonus!
        if (frameArray.length === 10) {
            frameArray[9].push(rolls[currentRoll + 1]);
            frameArray[9].push(rolls[currentRoll + 2]);
            currentRoll += 2;
        }
    }
    return frameArray;
}

export const isOdd = (input) => {
    return (input % 2 !== 0);
}