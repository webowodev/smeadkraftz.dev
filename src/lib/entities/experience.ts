export type IExperience = {
  id?: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
};

interface Experience extends IExperience {}

class Experience implements Experience {
  constructor({
    id,
    title,
    company,
    startDate,
    endDate,
    description,
  }: IExperience) {
    this.id = id;
    this.title = title;
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

export default Experience;
