export class IndustryBrandsAndGalleries {
  constructor(
    public brands: {
      sectionTitle: string;
      title: string;
      icons: { logo: string }[];
    },
    public gallery: {
      sectionTitle: string;
      title: string;
      images: { image: string }[];
    }
  ) {}
}

export class IndustryBrands {
  constructor(
    public sectionTitle: string,
    public title: string,
    public icons: { logo: string }[]
  ) {}
}

export class IndustryGallery {
  constructor(
    public sectionTitle: string,
    public title: string,
    public images: { image: string }[]
  ) {}
}
