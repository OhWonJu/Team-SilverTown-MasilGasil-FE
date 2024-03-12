import { IntensityOption } from "../OriginDataType";

export interface AuthResponse {
  token?: string;
}

export interface MeResponse {
  userId: number;
  nickname: string;
  profileImg?: string;
  sex?: "MALE" | "FEMALE";
  birthDate?: string;
  height?: number;
  weight?: number;
  exerciseIntensity?: IntensityOption;
  isPublic: boolean;
}

export interface CheckNickNameResponse {
  isDuplicated: boolean;
  nickname: string;
}

// export interface SignUpResponse {}
