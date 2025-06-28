import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'https://ebedb226b522bdea35865c7df0236178@o4508603140472832.ingest.de.sentry.io/4509575488733264',

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
