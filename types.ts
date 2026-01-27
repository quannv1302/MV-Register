export enum Gender {
  MALE = 'Nam',
  FEMALE = 'Nữ',
  OTHER = 'Khác'
}



export enum PackageType {
  MVA = 'MVA (K - Grade 1)',
  MVK = 'MVK (PreK)'
}

export enum GradeLevel {
  PRE_K = 'PreK',
  K = 'Kindergarten (K)',
  GRADE_1 = 'Grade 1'
}

export interface ParentInfo {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: Gender;
  country: string;
}

export interface StudentInfo {
  id: string; // Unique ID for key rendering
  fullName: string;
  dob: string;
  gender: Gender;
  country: string;
  packageType?: PackageType; // Optional initially
  gradeLevel?: GradeLevel;   // Optional initially (no default)
}

export interface RegistrationData {
  parent: ParentInfo;
  students: StudentInfo[];
}

export const COUNTRIES = [
  "Việt Nam",
  "Hoa Kỳ",
  "Canada",
  "Úc",
  "Singapore",
  "Nhật Bản",
  "Hàn Quốc",
  "Anh",
  "Đức",
  "Pháp",
  "Khác"
];