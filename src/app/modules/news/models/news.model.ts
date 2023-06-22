export class companyNewsPage {
  constructor(
    public sectionTitle: string,
    public title: string,
    public newsPageData: {
      image: string;
      date: string;
      capTitle: string;
      description: string;
      readMore: string;
    }[],
    public readMore: {
      date: string;
      capTitle: string;
      description: string;
    }[]
  ) {}
}
