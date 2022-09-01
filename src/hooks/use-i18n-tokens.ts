import { useTranslation } from "next-i18next";
import {
  Namespace,
  KeyPrefix,
  UseTranslationOptions,
  DefaultNamespace,
} from "react-i18next";

export function useI18nToken<
  N extends Namespace = DefaultNamespace,
  TKPrefix extends KeyPrefix<N> = undefined
>(ns: N, keys: string[], options?: UseTranslationOptions<TKPrefix>): string[] {
  const [t] = useTranslation(ns, options);

  return keys.map(t) as string[];
}
