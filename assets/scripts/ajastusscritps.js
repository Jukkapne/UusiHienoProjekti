    // Check the current date and apply themes accordingly
    const currentDate = new Date();
    console.log("Tänään on: "+currentDate);

    if (currentDate.getMonth() === 9 && currentDate.getDate() === 31) {
        // Halloween - October 31
        document.body.classList.add('halloween');
    } else if (currentDate.getMonth() === 11 && (currentDate.getDate() >= 24 && currentDate.getDate() <= 26)) {
        // Christmas - December 24-26
        document.body.classList.add('christmas');
    }
