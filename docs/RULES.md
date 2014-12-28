## Правила типографа

| № | Имя | Название | [Индекс](./RULES_SORTED.md) | Вкл. |
|--:|-----|----------|----------------------------:|:----:|
| 1. | `common/html/nbr` | Замена перевода строки на тег br | 710 |  |
| 2. | `common/html/pbr` | Расстановка тегов p и br | 700 |  |
| 3. | `common/html/stripTags` | Удаление HTML-тегов | 5 |  |
| 4. | `common/html/url` | Расстановка ссылок | 200 | ✓ |
| 5. | `common/nbsp/afterPara` | Неразрывный пробел после § | 610 | ✓ |
| 6. | `common/nbsp/afterShortWord` | Неразрывный пробел после короткого слова | 590 | ✓ |
| 7. | `common/nbsp/beforeShortLastWord` | Неразрывный пробел перед последним коротким словом в предложении | 620 | ✓ |
| 8. | `common/nbsp/dpi` | Неразрывный пробел перед lpi, dpi | 1150 | ✓ |
| 9. | `common/nbsp/nowrap` | Заменять неразрывный пробел на обычный пробел в тегах nowrap и nobr | 1400 | ✓ |
| 10. | `common/number/fraction` | 1/2 → ½, 1/4 → ¼, 3/3 → ¾ | 1120 | ✓ |
| 11. | `common/number/plusMinus` | +- → ± | 1010 | ✓ |
| 12. | `common/number/times` | x → × (10 x 5 → 10×5) | 1050 | ✓ |
| 13. | `common/other/repeatWord` | Удаление повтора слова | 1200 |  |
| 14. | `common/punctuation/delDoublePunctuation` | Удаление двойной пунктуации | 580 | ✓ |
| 15. | `common/punctuation/exclamation` | !! → ! | 1150 | ✓ |
| 16. | `common/punctuation/exclamationQuestion` | !? → ?! | 1140 | ✓ |
| 17. | `common/punctuation/hellip` | Три точки на троеточие | 20 | ✓ |
| 18. | `common/space/afterPunctuation` | Пробел после знаков пунктуации | 560 | ✓ |
| 19. | `common/space/delBeforePercent` | Удаление пробела перед %, ‰ и ‱ | 600 | ✓ |
| 20. | `common/space/delBeforePunctuation` | Удаление пробелов перед знаками пунктуации | 550 | ✓ |
| 21. | `common/space/delRepeatN` | Удаление повторяющихся переносов строки (не более двух) | 545 | ✓ |
| 22. | `common/space/delRepeatSpace` | Удаление повторяющихся пробелов | 540 | ✓ |
| 23. | `common/space/delTrailingBlanks` | Удаление пробелов в конце строк | 505 | ✓ |
| 24. | `common/space/replaceTab` | Замена табов на пробелы | 510 | ✓ |
| 25. | `common/space/trim` | Удаление пробелов в начале и в конце текста | 530 | ✓ |
| 26. | `common/sym/arrow` | -> → →, <- → ← | 1130 | ✓ |
| 27. | `common/sym/cf` | Добавление ° к C и F | 1020 | ✓ |
| 28. | `common/sym/copy` | (c) → ©, (tm) → ©, (r) → ™ | 10 | ✓ |
| 29. | `ru/dash/izpod` | Дефис между из-под | 35 | ✓ |
| 30. | `ru/dash/izza` | Дефис между из-за | 33 | ✓ |
| 31. | `ru/dash/koe` | Дефис после кое и кой | 38 | ✓ |
| 32. | `ru/dash/main` | Дефис на тире | 620 | ✓ |
| 33. | `ru/dash/month` | Тире между месяцами | 610 | ✓ |
| 34. | `ru/dash/taki` | Дефис между верно-таки и т.д. | 39 | ✓ |
| 35. | `ru/dash/to` | Дефис перед то, либо, нибудь, ка, де, кась | 30 | ✓ |
| 36. | `ru/dash/weekday` | Тире между днями недели | 600 | ✓ |
| 37. | `ru/date/main` | Преобразование дат YYYY-MM-DD к виду DD.MM.YYYY | 1300 | ✓ |
| 38. | `ru/date/weekday` | 2 Мая, Понедельник → 2 мая, понедельник | 1310 | ✓ |
| 39. | `ru/money/dollar` | $100 → 100 $ | 1140 | ✓ |
| 40. | `ru/money/euro` | €100 → 100 € | 1140 | ✓ |
| 41. | `ru/money/ruble` | 1 руб. → 1 ₽ | 1145 |  |
| 42. | `ru/nbsp/afterNum` | Неразрывный пробел после № | 610 | ✓ |
| 43. | `ru/nbsp/beforeParticle` | Неразрывный пробел перед ли, ль, же, бы, б | 570 | ✓ |
| 44. | `ru/nbsp/beforeShortLastWord` | Неразрывный пробел перед последним коротким словом в предложении | 620 | ✓ |
| 45. | `ru/nbsp/but` | Расстановка запятых и неразрывного пробела перед а и но | 1110 | ✓ |
| 46. | `ru/nbsp/cc` | Удаление пробелов и лишних точек в вв. | 1090 | ✓ |
| 47. | `ru/nbsp/m` | m2 → м², m3 → м³ и неразрывный пробел | 1030 | ✓ |
| 48. | `ru/nbsp/ooo` | Неразрывный пробел после OOO, ОАО, ЗАО, НИИ и ПБОЮЛ | 1100 | ✓ |
| 49. | `ru/nbsp/page` | Неразрывный пробел перед стр., гл., рис., илл. | 610 | ✓ |
| 50. | `ru/nbsp/xxxx` | Неразрывный пробел после XXXX (2012 г.) | 1060 | ✓ |
| 51. | `ru/nbsp/yy` | г.г. → гг. и неразрывный пробел | 1080 | ✓ |
| 52. | `ru/number/ordinals` | N-ый, -ой, -ая, -ое, -ые, -ым, -ом, -ых → N-й, -я, -е, -м, -х (25-й) | 1300 | ✓ |
| 53. | `ru/optalign/bracket` | Висячая пунктуация для открывающей скобки | 1001 |  |
| 54. | `ru/optalign/comma` | Висячая пунктуация для запятой | 1002 |  |
| 55. | `ru/optalign/quot` | Висячая пунктуация для открывающей кавычки | 1000 |  |
| 56. | `ru/punctuation/quot` | Расстановка кавычек | 700 | ✓ |