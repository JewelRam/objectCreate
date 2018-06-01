const GreatClips = Object.create({}, {
    business: {
        value: "GreatClips"
    },
    employmentStart: {
        value: "01-01-2014"
    },
    employmentEnd: {
        value: "01-01-2016"
    },
    thingsILiked: {
        value: "Making Money"
    },
    thingsIHated: {
        value: "Everything"
    }
})

const Roosters = Object.create({}, {
    business: {
        value: "Roosters"
    },
    employmentStart: {
        value: "01-01-2016"
    },
    employmentEnd: {
        value: "01-01-2018"
    },
    thingsILiked: {
        value: "Making Alot More Money"
    },
    thingsIHated: {
        value: "Adults Acting Like Children"
    }
})

// challenge
const JobMaker = (business, startDate, endDate) => {
    let newJob = Object.create( {}, {
        business: {
            value: business
        },
        startDate: {
            value: startDate
        },
        endDate: {
            value: endDate
        }
    })
    return newJob;
}
console.log(JobMaker("something", "10", "12"));

// advanced challenge

const jobArray = [GreatClips, Roosters]


for(let i=0; i<jobArray.length; i++) {

    const article = document.createElement("article")
    article.setAttribute("id", jobArray[i].business);
    document.querySelector("#something").appendChild(article);
}

