import moment from "moment";

export function getClearbitLogo(url: string) {
  const domain = new URL(url).hostname;
  return `https://logo.clearbit.com/${domain}`;
}

export function getRelativeTime(date: string) {
  return moment(new Date(date)).fromNow();
}
