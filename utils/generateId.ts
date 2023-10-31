import uuid from "react-native-uuid";

export const generateId = (): string => {
  return uuid.v4().toString();
};
