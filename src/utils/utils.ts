export const boldNoRuin =
  "before:block before:content-[attr(title)] before:font-semibold before:h-0 before:overflow-hidden before:invisible before:capitalize";

export const toCapitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const underlineTitle =
  "after:block after:h-[3px] after:bg-primary after:mt-[12px] after:animate-grow";

export const BASE_URL = "https://inr.hmjti-uinam.com/api/public";

export const convertDate = (date: Date) => {
  return new Date(date).toLocaleDateString("id-ID");
};
