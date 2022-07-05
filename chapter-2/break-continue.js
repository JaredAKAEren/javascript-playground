const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
    const score = scores[i]

    if (score === 0) {
        continue
    }

    console.log('your score: ', score)

    if (score === 100) {
        console.log('congrats, you got the top score.')
        break
    }
}