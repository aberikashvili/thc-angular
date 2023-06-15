export class CompanyStructureEntry {
  constructor(
    public sectionTitle: string,
    public title: string,
    public description: string,
    public industries: { title: string; description: string }[]
  ) {}
}
