import createMiddleware from "next-intl/middleware";
import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

export default createMiddleware({
  defaultLocale: "en",
  locales: ['en', 'vi'],
  localeDetection: false,
  localePrefix
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
