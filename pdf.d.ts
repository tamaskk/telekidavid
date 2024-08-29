// custom.d.ts

// Declare module for PDF files
declare module "*.pdf" {
  const src: string;
  export default src;
}

// You can add similar declarations for other file types if needed
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}
