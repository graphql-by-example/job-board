const locale = navigator.language;
const mediumDateFormat = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' });
const longDateFormat = new Intl.DateTimeFormat(locale, { dateStyle: 'long' });

export function formatDate(isoString: string, style: 'medium' | 'long' = 'medium') {
  const date = new Date(isoString);
  return style === 'long'
    ? longDateFormat.format(date)
    : mediumDateFormat.format(date)
}
