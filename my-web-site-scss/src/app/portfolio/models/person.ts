export class Person {
    date: string;
    department: string;
    title: string;
    where: string;
    description: string;
    links: CompanyLink[];
}

export class CompanyLink {
    link: string;
    text: string;
}