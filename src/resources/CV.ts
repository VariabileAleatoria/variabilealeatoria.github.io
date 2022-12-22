export type Step = {
    time: string;
    description: string;
    optional?: string;
}

export const education: Array<Step> = [
    {
        time: "2019 - 2021",
        description: "Master's Degree in Computer Engineering @ Università degli Studi di Genova (110 cum laude/100)"
    },
    {
        time: "2016 - 2019",
        description: "Bachelor's Degree in Computer Engineering @ Università degli Studi di Genova (108/110)"
    },
    {
        time: "2011 - 2016",
        description: "High school diploma @ Liceo Scientifico Leonardo da Vinci (95/100)"
    }
]

export const workExperience: Array<Step> = [
    {
        time: "2022 - now",
        description: "Research fellow @ Università degli Studi di Genova",
        optional: "Including a cooperation with Liguria Digitale S.p.A on a Mobile E-Health project."
    },
    {
        time: "Dec 2021 - Feb 2022",
        description: "Research grant @ Università degli Studi di Genova"
    }
]