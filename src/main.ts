import confetti from 'canvas-confetti';

const bingoItems: string[] = [
    // 1+1
    "1+1 kawa", "1+1 nabiał", "1+1 mleko", "1+1 zabawki", "1+1 owoce", "1+1 ser", "1+1 pieczywo", "1+1 bułki", "1+1 chleb", "1+1 Lipton", "1+1 herbata", "1+1 żelki", "1+1 chipsy", "1+1 Lays", "1+1 pringles", "1+1 piwo", "1+1 alkohol", "1+1 kosmetyki do włosów", "1+1 chemia", "1+1 kapsułki do prania", "1+1 perfumy do prania", "1+1 ubrania", "1+1 mięso", "1+1 kurczak", "1+1 piersi z kurczaka", "1+1 przyprawy", "1+1 sos", "1+1 zupki chińskie", "1+1 czekolady", "1+1 produkty milka", "1+1 sok", "1+1 woda", "1+1 warzywa", "1+1 salami", "1+1 wędlina", "1+1 masło", "1+1 śmietana", "1+1 jogurt", "1+1 pomidor", "1+1 jabłko", "1+1 mandarynka", "1+1 winogrono", "1+1 gruszka", "1+1 awokado", "1+1 top chips", "1+1 mozzarella", "1+1 żubr", "1+1 ciastka", "1+1 dzik", "1+1 ozdoby świąteczne", "1+1 czekoladowy mikołaj", "1+1 kosmetyki Nivea",

    // 2+2
    "2+2 kawa", "2+2 nabiał", "2+2 mleko", "2+2 zabawki", "2+2 owoce", "2+2 ser", "2+2 pieczywo", "2+2 bułki", "2+2 chleb", "2+2 Lipton", "2+2 herbata", "2+2 żelki", "2+2 chipsy", "2+2 Lays", "2+2 pringles", "2+2 piwo", "2+2 alkohol", "2+2 kosmetyki do włosów", "2+2 chemia", "2+2 kapsułki do prania", "2+2 perfumy do prania", "2+2 ubrania", "2+2 mięso", "2+2 kurczak", "2+2 piersi z kurczaka", "2+2 przyprawy", "2+2 sos", "2+2 zupki chińskie", "2+2 czekolady", "2+2 produkty milka", "2+2 sok", "2+2 woda", "2+2 warzywa", "2+2 salami", "2+2 wędlina", "2+2 masło", "2+2 śmietana", "2+2 jogurt", "2+2 pomidor", "2+2 jabłko", "2+2 mandarynka", "2+2 winogrono", "2+2 gruszka", "2+2 awokado", "2+2 top chips", "2+2 mozzarella", "2+2 żubr", "2+2 ciastka", "2+2 dzik", "2+2 ozdoby świąteczne", "2+2 czekoladowy mikołaj", "2+2 kosmetyki Nivea",

    // 2+1
    "2+1 kawa", "2+1 nabiał", "2+1 mleko", "2+1 zabawki", "2+1 owoce", "2+1 ser", "2+1 pieczywo", "2+1 bułki", "2+1 chleb", "2+1 Lipton", "2+1 herbata", "2+1 żelki", "2+1 chipsy", "2+1 Lays", "2+1 pringles", "2+1 piwo", "2+1 alkohol", "2+1 kosmetyki do włosów", "2+1 chemia", "2+1 kapsułki do prania", "2+1 perfumy do prania", "2+1 ubrania", "2+1 mięso", "2+1 kurczak", "2+1 piersi z kurczaka", "2+1 przyprawy", "2+1 sos", "2+1 zupki chińskie", "2+1 czekolady", "2+1 produkty milka", "2+1 sok", "2+1 woda", "2+1 warzywa", "2+1 salami", "2+1 wędlina", "2+1 masło", "2+1 śmietana", "2+1 jogurt", "2+1 pomidor", "2+1 jabłko", "2+1 mandarynka", "2+1 winogrono", "2+1 gruszka", "2+1 awokado", "2+1 top chips", "2+1 mozzarella", "2+1 żubr", "2+1 ciastka", "2+1 dzik", "2+1 ozdoby świąteczne", "2+1 czekoladowy mikołaj", "2+1 kosmetyki Nivea",

    // 3+3
    "3+3 kawa", "3+3 nabiał", "3+3 mleko", "3+3 zabawki", "3+3 owoce", "3+3 ser", "3+3 pieczywo", "3+3 bułki", "3+3 chleb", "3+3 Lipton", "3+3 herbata", "3+3 żelki", "3+3 chipsy", "3+3 Lays", "3+3 pringles", "3+3 piwo", "3+3 alkohol", "3+3 kosmetyki do włosów", "3+3 chemia", "3+3 kapsułki do prania", "3+3 perfumy do prania", "3+3 ubrania", "3+3 mięso", "3+3 kurczak", "3+3 piersi z kurczaka", "3+3 przyprawy", "3+3 sos", "3+3 zupki chińskie", "3+3 czekolady", "3+3 produkty milka", "3+3 sok", "3+3 woda", "3+3 warzywa", "3+3 salami", "3+3 wędlina", "3+3 masło", "3+3 śmietana", "3+3 jogurt", "3+3 pomidor", "3+3 jabłko", "3+3 mandarynka", "3+3 winogrono", "3+3 gruszka", "3+3 awokado", "3+3 top chips", "3+3 mozzarella", "3+3 żubr", "3+3 ciastka", "3+3 dzik", "3+3 ozdoby świąteczne", "3+3 czekoladowy mikołaj", "3+3 kosmetyki Nivea",

    // 4+2
    "4+2 kawa", "4+2 nabiał", "4+2 mleko", "4+2 zabawki", "4+2 owoce", "4+2 ser", "4+2 pieczywo", "4+2 bułki", "4+2 chleb", "4+2 Lipton", "4+2 herbata", "4+2 żelki", "4+2 chipsy", "4+2 Lays", "4+2 pringles", "4+2 piwo", "4+2 alkohol", "4+2 kosmetyki do włosów", "4+2 chemia", "4+2 kapsułki do prania", "4+2 perfumy do prania", "4+2 ubrania", "4+2 mięso", "4+2 kurczak", "4+2 piersi z kurczaka", "4+2 przyprawy", "4+2 sos", "4+2 zupki chińskie", "4+2 czekolady", "4+2 produkty milka", "4+2 sok", "4+2 woda", "4+2 warzywa", "4+2 salami", "4+2 wędlina", "4+2 masło", "4+2 śmietana", "4+2 jogurt", "4+2 pomidor", "4+2 jabłko", "4+2 mandarynka", "4+2 winogrono", "4+2 gruszka", "4+2 awokado", "4+2 top chips", "4+2 mozzarella", "4+2 żubr", "4+2 ciastka", "4+2 dzik", "4+2 ozdoby świąteczne", "4+2 czekoladowy mikołaj", "4+2 kosmetyki Nivea",

    // 6+6
    "6+6 kawa", "6+6 nabiał", "6+6 mleko", "6+6 zabawki", "6+6 owoce", "6+6 ser", "6+6 pieczywo", "6+6 bułki", "6+6 chleb", "6+6 Lipton", "6+6 herbata", "6+6 żelki", "6+6 chipsy", "6+6 Lays", "6+6 pringles", "6+6 piwo", "6+6 alkohol", "6+6 kosmetyki do włosów", "6+6 chemia", "6+6 kapsułki do prania", "6+6 perfumy do prania", "6+6 ubrania", "6+6 mięso", "6+6 kurczak", "6+6 piersi z kurczaka", "6+6 przyprawy", "6+6 sos", "6+6 zupki chińskie", "6+6 czekolady", "6+6 produkty milka", "6+6 sok", "6+6 woda", "6+6 warzywa", "6+6 salami", "6+6 wędlina", "6+6 masło", "6+6 śmietana", "6+6 jogurt", "6+6 pomidor", "6+6 jabłko", "6+6 mandarynka", "6+6 winogrono", "6+6 gruszka", "6+6 awokado", "6+6 top chips", "6+6 mozzarella", "6+6 żubr", "6+6 ciastka", "6+6 dzik", "6+6 ozdoby świąteczne", "6+6 czekoladowy mikołaj", "6+6 kosmetyki Nivea",

    // 12+12 (tylko piwo)
    "12+12 piwo", "12+12 żubr",

    // 2w1
    "2w1 kawa", "2w1 nabiał", "2w1 mleko", "2w1 zabawki", "2w1 owoce", "2w1 ser", "2w1 pieczywo", "2w1 bułki", "2w1 chleb", "2w1 Lipton", "2w1 herbata", "2w1 żelki", "2w1 chipsy", "2w1 Lays", "2w1 pringles", "2w1 piwo", "2w1 alkohol", "2w1 kosmetyki do włosów", "2w1 chemia", "2w1 kapsułki do prania", "2w1 perfumy do prania", "2w1 ubrania", "2w1 mięso", "2w1 kurczak", "2w1 piersi z kurczaka", "2w1 przyprawy", "2w1 sos", "2w1 zupki chińskie", "2w1 czekolady", "2w1 produkty milka", "2w1 sok", "2w1 woda", "2w1 warzywa", "2w1 salami", "2w1 wędlina", "2w1 masło", "2w1 śmietana", "2w1 jogurt", "2w1 pomidor", "2w1 jabłko", "2w1 mandarynka", "2w1 winogrono", "2w1 gruszka", "2w1 awokado", "2w1 top chips", "2w1 mozzarella", "2w1 żubr", "2w1 ciastka", "2w1 dzik", "2w1 ozdoby świąteczne", "2w1 czekoladowy mikołaj", "2w1 kosmetyki Nivea",

    // 3w2
    "3w2 kawa", "3w2 nabiał", "3w2 mleko", "3w2 zabawki", "3w2 owoce", "3w2 ser", "3w2 pieczywo", "3w2 bułki", "3w2 chleb", "3w2 Lipton", "3w2 herbata", "3w2 żelki", "3w2 chipsy", "3w2 Lays", "3w2 pringles", "3w2 piwo", "3w2 alkohol", "3w2 kosmetyki do włosów", "3w2 chemia", "3w2 kapsułki do prania", "3w2 perfumy do prania", "3w2 ubrania", "3w2 mięso", "3w2 kurczak", "3w2 piersi z kurczaka", "3w2 przyprawy", "3w2 sos", "3w2 zupki chińskie", "3w2 czekolady", "3w2 produkty milka", "3w2 sok", "3w2 woda", "3w2 warzywa", "3w2 salami", "3w2 wędlina", "3w2 masło", "3w2 śmietana", "3w2 jogurt", "3w2 pomidor", "3w2 jabłko", "3w2 mandarynka", "3w2 winogrono", "3w2 gruszka", "3w2 awokado", "3w2 top chips", "3w2 mozzarella", "3w2 żubr", "3w2 ciastka", "3w2 dzik", "3w2 ozdoby świąteczne", "3w2 czekoladowy mikołaj", "3w2 kosmetyki Nivea",

    // -50%
    "-50% kawa", "-50% nabiał", "-50% mleko", "-50% zabawki", "-50% owoce", "-50% ser", "-50% pieczywo", "-50% bułki", "-50% chleb", "-50% Lipton", "-50% herbata", "-50% żelki", "-50% chipsy", "-50% Lays", "-50% pringles", "-50% piwo", "-50% alkohol", "-50% kosmetyki do włosów", "-50% chemia", "-50% kapsułki do prania", "-50% perfumy do prania", "-50% ubrania", "-50% mięso", "-50% kurczak", "-50% piersi z kurczaka", "-50% przyprawy", "-50% sos", "-50% zupki chińskie", "-50% czekolady", "-50% produkty milka", "-50% sok", "-50% woda", "-50% warzywa", "-50% salami", "-50% wędlina", "-50% masło", "-50% śmietana", "-50% jogurt", "-50% pomidor", "-50% jabłko", "-50% mandarynka", "-50% winogrono", "-50% gruszka", "-50% awokado", "-50% top chips", "-50% mozzarella", "-50% żubr", "-50% ciastka", "-50% dzik", "-50% ozdoby świąteczne", "-50% czekoladowy mikołaj", "-50% kosmetyki Nivea",

    // -75%
    "-75% kawa", "-75% nabiał", "-75% mleko", "-75% zabawki", "-75% owoce", "-75% ser", "-75% pieczywo", "-75% bułki", "-75% chleb", "-75% Lipton", "-75% herbata", "-75% żelki", "-75% chipsy", "-75% Lays", "-75% pringles", "-75% piwo", "-75% alkohol", "-75% kosmetyki do włosów", "-75% chemia", "-75% kapsułki do prania", "-75% perfumy do prania", "-75% ubrania", "-75% mięso", "-75% kurczak", "-75% piersi z kurczaka", "-75% przyprawy", "-75% sos", "-75% zupki chińskie", "-75% czekolady", "-75% produkty milka", "-75% sok", "-75% woda", "-75% warzywa", "-75% salami", "-75% wędlina", "-75% masło", "-75% śmietana", "-75% jogurt", "-75% pomidor", "-75% jabłko", "-75% mandarynka", "-75% winogrono", "-75% gruszka", "-75% awokado", "-75% top chips", "-75% mozzarella", "-75% żubr", "-75% ciastka", "-75% dzik", "-75% ozdoby świąteczne", "-75% czekoladowy mikołaj", "-75% kosmetyki Nivea",

    // drugi 60% taniej
    "drugi 60% taniej kawa", "drugi 60% taniej nabiał", "drugi 60% taniej mleko", "drugi 60% taniej zabawki", "drugi 60% taniej owoce", "drugi 60% taniej ser", "drugi 60% taniej pieczywo", "drugi 60% taniej bułki", "drugi 60% taniej chleb", "drugi 60% taniej Lipton", "drugi 60% taniej herbata", "drugi 60% taniej żelki", "drugi 60% taniej chipsy", "drugi 60% taniej Lays", "drugi 60% taniej pringles", "drugi 60% taniej piwo", "drugi 60% taniej alkohol", "drugi 60% taniej kosmetyki do włosów", "drugi 60% taniej chemia", "drugi 60% taniej kapsułki do prania", "drugi 60% taniej perfumy do prania", "drugi 60% taniej ubrania", "drugi 60% taniej mięso", "drugi 60% taniej kurczak", "drugi 60% taniej piersi z kurczaka", "drugi 60% taniej przyprawy", "drugi 60% taniej sos", "drugi 60% taniej zupki chińskie", "drugi 60% taniej czekolady", "drugi 60% taniej produkty milka", "drugi 60% taniej sok", "drugi 60% taniej woda", "drugi 60% taniej warzywa", "drugi 60% taniej salami", "drugi 60% taniej wędlina", "drugi 60% taniej masło", "drugi 60% taniej śmietana", "drugi 60% taniej jogurt", "drugi 60% taniej pomidor", "drugi 60% taniej jabłko", "drugi 60% taniej mandarynka", "drugi 60% taniej winogrono", "drugi 60% taniej gruszka", "drugi 60% taniej awokado", "drugi 60% taniej top chips", "drugi 60% taniej mozzarella", "drugi 60% taniej żubr", "drugi 60% taniej ciastka", "drugi 60% taniej dzik", "drugi 60% taniej ozdoby świąteczne", "drugi 60% taniej czekoladowy mikołaj", "drugi 60% taniej kosmetyki Nivea",

    // trzeci 70% taniej
    "trzeci 70% taniej kawa", "trzeci 70% taniej nabiał", "trzeci 70% taniej mleko", "trzeci 70% taniej zabawki", "trzeci 70% taniej owoce", "trzeci 70% taniej ser", "trzeci 70% taniej pieczywo", "trzeci 70% taniej bułki", "trzeci 70% taniej chleb", "trzeci 70% taniej Lipton", "trzeci 70% taniej herbata", "trzeci 70% taniej żelki", "trzeci 70% taniej chipsy", "trzeci 70% taniej Lays", "trzeci 70% taniej pringles", "trzeci 70% taniej piwo", "trzeci 70% taniej alkohol", "trzeci 70% taniej kosmetyki do włosów", "trzeci 70% taniej chemia", "trzeci 70% taniej kapsułki do prania", "trzeci 70% taniej perfumy do prania", "trzeci 70% taniej ubrania", "trzeci 70% taniej mięso", "trzeci 70% taniej kurczak", "trzeci 70% taniej piersi z kurczaka", "trzeci 70% taniej przyprawy", "trzeci 70% taniej sos", "trzeci 70% taniej zupki chińskie", "trzeci 70% taniej czekolady", "trzeci 70% taniej produkty milka", "trzeci 70% taniej sok", "trzeci 70% taniej woda", "trzeci 70% taniej warzywa", "trzeci 70% taniej salami", "trzeci 70% taniej wędlina", "trzeci 70% taniej masło", "trzeci 70% taniej śmietana", "trzeci 70% taniej jogurt", "trzeci 70% taniej pomidor", "trzeci 70% taniej jabłko", "trzeci 70% taniej mandarynka", "trzeci 70% taniej winogrono", "trzeci 70% taniej gruszka", "trzeci 70% taniej awokado", "trzeci 70% taniej top chips", "trzeci 70% taniej mozzarella", "trzeci 70% taniej żubr", "trzeci 70% taniej ciastka", "trzeci 70% taniej dzik", "trzeci 70% taniej ozdoby świąteczne", "trzeci 70% taniej czekoladowy mikołaj", "trzeci 70% taniej kosmetyki Nivea",

    // 2 za grosz
    "2 za grosz kawa", "2 za grosz nabiał", "2 za grosz mleko", "2 za grosz zabawki", "2 za grosz owoce", "2 za grosz ser", "2 za grosz pieczywo", "2 za grosz bułki", "2 za grosz chleb", "2 za grosz Lipton", "2 za grosz herbata", "2 za grosz żelki", "2 za grosz chipsy", "2 za grosz Lays", "2 za grosz pringles", "2 za grosz piwo", "2 za grosz alkohol", "2 za grosz kosmetyki do włosów", "2 za grosz chemia", "2 za grosz kapsułki do prania", "2 za grosz perfumy do prania", "2 za grosz ubrania", "2 za grosz mięso", "2 za grosz kurczak", "2 za grosz piersi z kurczaka", "2 za grosz przyprawy", "2 za grosz sos", "2 za grosz zupki chińskie", "2 za grosz czekolady", "2 za grosz produkty milka", "2 za grosz sok", "2 za grosz woda", "2 za grosz warzywa", "2 za grosz salami", "2 za grosz wędlina", "2 za grosz masło", "2 za grosz śmietana", "2 za grosz jogurt", "2 za grosz pomidor", "2 za grosz jabłko", "2 za grosz mandarynka", "2 za grosz winogrono", "2 za grosz gruszka", "2 za grosz awokado", "2 za grosz top chips", "2 za grosz mozzarella", "2 za grosz żubr", "2 za grosz ciastka", "2 za grosz dzik", "2 za grosz ozdoby świąteczne", "2 za grosz czekoladowy mikołaj", "2 za grosz kosmetyki Nivea",

    // 3 za grosz
    "3 za grosz kawa", "3 za grosz nabiał", "3 za grosz mleko", "3 za grosz zabawki", "3 za grosz owoce", "3 za grosz ser", "3 za grosz pieczywo", "3 za grosz bułki", "3 za grosz chleb", "3 za grosz Lipton", "3 za grosz herbata", "3 za grosz żelki", "3 za grosz chipsy", "3 za grosz Lays", "3 za grosz pringles", "3 za grosz piwo", "3 za grosz alkohol", "3 za grosz kosmetyki do włosów", "3 za grosz chemia", "3 za grosz kapsułki do prania", "3 za grosz perfumy do prania", "3 za grosz ubrania", "3 za grosz mięso", "3 za grosz kurczak", "3 za grosz piersi z kurczaka", "3 za grosz przyprawy", "3 za grosz sos", "3 za grosz zupki chińskie", "3 za grosz czekolady", "3 za grosz produkty milka", "3 za grosz sok", "3 za grosz woda", "3 za grosz warzywa", "3 za grosz salami", "3 za grosz wędlina", "3 za grosz masło", "3 za grosz śmietana", "3 za grosz jogurt", "3 za grosz pomidor", "3 za grosz jabłko", "3 za grosz mandarynka", "3 za grosz winogrono", "3 za grosz gruszka", "3 za grosz awokado", "3 za grosz top chips", "3 za grosz mozzarella", "3 za grosz żubr", "3 za grosz ciastka", "3 za grosz dzik", "3 za grosz ozdoby świąteczne", "3 za grosz czekoladowy mikołaj", "3 za grosz kosmetyki Nivea",

    // drugi za 1zł
    "drugi za 1zł kawa", "drugi za 1zł nabiał", "drugi za 1zł mleko", "drugi za 1zł zabawki", "drugi za 1zł owoce", "drugi za 1zł ser", "drugi za 1zł pieczywo", "drugi za 1zł bułki", "drugi za 1zł chleb", "drugi za 1zł Lipton", "drugi za 1zł herbata", "drugi za 1zł żelki", "drugi za 1zł chipsy", "drugi za 1zł Lays", "drugi za 1zł pringles", "drugi za 1zł piwo", "drugi za 1zł alkohol", "drugi za 1zł kosmetyki do włosów", "drugi za 1zł chemia", "drugi za 1zł kapsułki do prania", "drugi za 1zł perfumy do prania", "drugi za 1zł ubrania", "drugi za 1zł mięso", "drugi za 1zł kurczak", "drugi za 1zł piersi z kurczaka", "drugi za 1zł przyprawy", "drugi za 1zł sos", "drugi za 1zł zupki chińskie", "drugi za 1zł czekolady", "drugi za 1zł produkty milka", "drugi za 1zł sok", "drugi za 1zł woda", "drugi za 1zł warzywa", "drugi za 1zł salami", "drugi za 1zł wędlina", "drugi za 1zł masło", "drugi za 1zł śmietana", "drugi za 1zł jogurt", "drugi za 1zł pomidor", "drugi za 1zł jabłko", "drugi za 1zł mandarynka", "drugi za 1zł winogrono", "drugi za 1zł gruszka", "drugi za 1zł awokado", "drugi za 1zł top chips", "drugi za 1zł mozzarella", "drugi za 1zł żubr", "drugi za 1zł ciastka", "drugi za 1zł dzik", "drugi za 1zł ozdoby świąteczne", "drugi za 1zł czekoladowy mikołaj", "drugi za 1zł kosmetyki Nivea",

    // trzeci za 1zł
    "trzeci za 1zł kawa", "trzeci za 1zł nabiał", "trzeci za 1zł mleko", "trzeci za 1zł zabawki", "trzeci za 1zł owoce", "trzeci za 1zł ser", "trzeci za 1zł pieczywo", "trzeci za 1zł bułki", "trzeci za 1zł chleb", "trzeci za 1zł Lipton", "trzeci za 1zł herbata", "trzeci za 1zł żelki", "trzeci za 1zł chipsy", "trzeci za 1zł Lays", "trzeci za 1zł pringles", "trzeci za 1zł piwo", "trzeci za 1zł alkohol", "trzeci za 1zł kosmetyki do włosów", "trzeci za 1zł chemia", "trzeci za 1zł kapsułki do prania", "trzeci za 1zł perfumy do prania", "trzeci za 1zł ubrania", "trzeci za 1zł mięso", "trzeci za 1zł kurczak", "trzeci za 1zł piersi z kurczaka", "trzeci za 1zł przyprawy", "trzeci za 1zł sos", "trzeci za 1zł zupki chińskie", "trzeci za 1zł czekolady", "trzeci za 1zł produkty milka", "trzeci za 1zł sok", "trzeci za 1zł woda", "trzeci za 1zł warzywa", "trzeci za 1zł salami", "trzeci za 1zł wędlina", "trzeci za 1zł masło", "trzeci za 1zł śmietana", "trzeci za 1zł jogurt", "trzeci za 1zł pomidor", "trzeci za 1zł jabłko", "trzeci za 1zł mandarynka", "trzeci za 1zł winogrono", "trzeci za 1zł gruszka", "trzeci za 1zł awokado", "trzeci za 1zł top chips", "trzeci za 1zł mozzarella", "trzeci za 1zł żubr", "trzeci za 1zł ciastka", "trzeci za 1zł dzik", "trzeci za 1zł ozdoby świąteczne", "trzeci za 1zł czekoladowy mikołaj", "trzeci za 1zł kosmetyki Nivea",

    // cała marka (tylko kosmetyki Nivea, top chips)
    "cała marka -30% top chips", "cała marka -30% kosmetyki Nivea",
    "cała marka -50% top chips", "cała marka -50% kosmetyki Nivea",

    // z aplikacją taniej 20%
    "z aplikacją taniej 20% kawa", "z aplikacją taniej 20% nabiał", "z aplikacją taniej 20% mleko", "z aplikacją taniej 20% zabawki", "z aplikacją taniej 20% owoce", "z aplikacją taniej 20% ser", "z aplikacją taniej 20% pieczywo", "z aplikacją taniej 20% bułki", "z aplikacją taniej 20% chleb", "z aplikacją taniej 20% Lipton", "z aplikacją taniej 20% herbata", "z aplikacją taniej 20% żelki", "z aplikacją taniej 20% chipsy", "z aplikacją taniej 20% Lays", "z aplikacją taniej 20% pringles", "z aplikacją taniej 20% piwo", "z aplikacją taniej 20% alkohol", "z aplikacją taniej 20% kosmetyki do włosów", "z aplikacją taniej 20% chemia", "z aplikacją taniej 20% kapsułki do prania", "z aplikacją taniej 20% perfumy do prania", "z aplikacją taniej 20% ubrania", "z aplikacją taniej 20% mięso", "z aplikacją taniej 20% kurczak", "z aplikacją taniej 20% piersi z kurczaka", "z aplikacją taniej 20% przyprawy", "z aplikacją taniej 20% sos", "z aplikacją taniej 20% zupki chińskie", "z aplikacją taniej 20% czekolady", "z aplikacją taniej 20% produkty milka", "z aplikacją taniej 20% sok", "z aplikacją taniej 20% woda", "z aplikacją taniej 20% warzywa", "z aplikacją taniej 20% salami", "z aplikacją taniej 20% wędlina", "z aplikacją taniej 20% masło", "z aplikacją taniej 20% śmietana", "z aplikacją taniej 20% jogurt", "z aplikacją taniej 20% pomidor", "z aplikacją taniej 20% jabłko", "z aplikacją taniej 20% mandarynka", "z aplikacją taniej 20% winogrono", "z aplikacją taniej 20% gruszka", "z aplikacją taniej 20% awokado", "z aplikacją taniej 20% top chips", "z aplikacją taniej 20% mozzarella", "z aplikacją taniej 20% żubr", "z aplikacją taniej 20% ciastka", "z aplikacją taniej 20% dzik", "z aplikacją taniej 20% ozdoby świąteczne", "z aplikacją taniej 20% czekoladowy mikołaj", "z aplikacją taniej 20% kosmetyki Nivea",

    // z aplikacją taniej 30%
    "z aplikacją taniej 30% kawa", "z aplikacją taniej 30% nabiał", "z aplikacją taniej 30% mleko", "z aplikacją taniej 30% zabawki", "z aplikacją taniej 30% owoce", "z aplikacją taniej 30% ser", "z aplikacją taniej 30% pieczywo", "z aplikacją taniej 30% bułki", "z aplikacją taniej 30% chleb", "z aplikacją taniej 30% Lipton", "z aplikacją taniej 30% herbata", "z aplikacją taniej 30% żelki", "z aplikacją taniej 30% chipsy", "z aplikacją taniej 30% Lays", "z aplikacją taniej 30% pringles", "z aplikacją taniej 30% piwo", "z aplikacją taniej 30% alkohol", "z aplikacją taniej 30% kosmetyki do włosów", "z aplikacją taniej 30% chemia", "z aplikacją taniej 30% kapsułki do prania", "z aplikacją taniej 30% perfumy do prania", "z aplikacją taniej 30% ubrania", "z aplikacją taniej 30% mięso", "z aplikacją taniej 30% kurczak", "z aplikacją taniej 30% piersi z kurczaka", "z aplikacją taniej 30% przyprawy", "z aplikacją taniej 30% sos", "z aplikacją taniej 30% zupki chińskie", "z aplikacją taniej 30% czekolady", "z aplikacją taniej 30% produkty milka", "z aplikacją taniej 30% sok", "z aplikacją taniej 30% woda", "z aplikacją taniej 30% warzywa", "z aplikacją taniej 30% salami", "z aplikacją taniej 30% wędlina", "z aplikacją taniej 30% masło", "z aplikacją taniej 30% śmietana", "z aplikacją taniej 30% jogurt", "z aplikacją taniej 30% pomidor", "z aplikacją taniej 30% jabłko", "z aplikacją taniej 30% mandarynka", "z aplikacją taniej 30% winogrono", "z aplikacją taniej 30% gruszka", "z aplikacją taniej 30% awokado", "z aplikacją taniej 30% top chips", "z aplikacją taniej 30% mozzarella", "z aplikacją taniej 30% żubr", "z aplikacją taniej 30% ciastka", "z aplikacją taniej 30% dzik", "z aplikacją taniej 30% ozdoby świąteczne", "z aplikacją taniej 30% czekoladowy mikołaj", "z aplikacją taniej 30% kosmetyki Nivea",

    // z aplikacją taniej 40%
    "z aplikacją taniej 40% kawa", "z aplikacją taniej 40% nabiał", "z aplikacją taniej 40% mleko", "z aplikacją taniej 40% zabawki", "z aplikacją taniej 40% owoce", "z aplikacją taniej 40% ser", "z aplikacją taniej 40% pieczywo", "z aplikacją taniej 40% bułki", "z aplikacją taniej 40% chleb", "z aplikacją taniej 40% Lipton", "z aplikacją taniej 40% herbata", "z aplikacją taniej 40% żelki", "z aplikacją taniej 40% chipsy", "z aplikacją taniej 40% Lays", "z aplikacją taniej 40% pringles", "z aplikacją taniej 40% piwo", "z aplikacją taniej 40% alkohol", "z aplikacją taniej 40% kosmetyki do włosów", "z aplikacją taniej 40% chemia", "z aplikacją taniej 40% kapsułki do prania", "z aplikacją taniej 40% perfumy do prania", "z aplikacją taniej 40% ubrania", "z aplikacją taniej 40% mięso", "z aplikacją taniej 40% kurczak", "z aplikacją taniej 40% piersi z kurczaka", "z aplikacją taniej 40% przyprawy", "z aplikacją taniej 40% sos", "z aplikacją taniej 40% zupki chińskie", "z aplikacją taniej 40% czekolady", "z aplikacją taniej 40% produkty milka", "z aplikacją taniej 40% sok", "z aplikacją taniej 40% woda", "z aplikacją taniej 40% warzywa", "z aplikacją taniej 40% salami", "z aplikacją taniej 40% wędlina", "z aplikacją taniej 40% masło", "z aplikacją taniej 40% śmietana", "z aplikacją taniej 40% jogurt", "z aplikacją taniej 40% pomidor", "z aplikacją taniej 40% jabłko", "z aplikacją taniej 40% mandarynka", "z aplikacją taniej 40% winogrono", "z aplikacją taniej 40% gruszka", "z aplikacją taniej 40% awokado", "z aplikacją taniej 40% top chips", "z aplikacją taniej 40% mozzarella", "z aplikacją taniej 40% żubr", "z aplikacją taniej 40% ciastka", "z aplikacją taniej 40% dzik", "z aplikacją taniej 40% ozdoby świąteczne", "z aplikacją taniej 40% czekoladowy mikołaj", "z aplikacją taniej 40% kosmetyki Nivea"
];

interface BingoCell {
    text: string;
    active: boolean;
}

const STORAGE_KEY = 'bingo_board_state';
const THEME_KEY = 'bingo_theme_state';
const clickSound = new Audio('click.mp3');

// --- LOGIKA MOTYWU (THEME) ---
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
        updateThemeButtonText(newTheme);
    });
}

function updateThemeButtonText(theme: string) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.innerText = theme === 'dark' ? 'Tryb Jasny ☀️' : 'Tryb Ciemny 🌙';
    }
}

// --- EFEKTY BINGO ---
function triggerConfetti() {
    const duration = 2.5 * 500;
    const end = Date.now() + duration;

    // Kolory konfetti dopasowane do motywu (złoty, platynowy, biały)
    const colors = ['#d4af37', '#f0f0f0', '#b8901f'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 1 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function countBingos(state: BingoCell[]): number {
    let bingos = 0;

    // Sprawdzanie wierszy
    for (let r = 0; r < 5; r++) {
        let rowWin = true;
        for (let c = 0; c < 5; c++) {
            if (!state[r * 5 + c].active) rowWin = false;
        }
        if (rowWin) bingos++;
    }

    // Sprawdzanie kolumn
    for (let c = 0; c < 5; c++) {
        let colWin = true;
        for (let r = 0; r < 5; r++) {
            if (!state[r * 5 + c].active) colWin = false;
        }
        if (colWin) bingos++;
    }

    // Sprawdzanie przekątnych
    let diag1Win = true;
    let diag2Win = true;
    for (let i = 0; i < 5; i++) {
        if (!state[i * 5 + i].active) diag1Win = false;
        if (!state[i * 5 + (4 - i)].active) diag2Win = false;
    }
    if (diag1Win) bingos++;
    if (diag2Win) bingos++;

    return bingos;
}

// --- LOGIKA BINGO ---
function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateNewBoard(): BingoCell[] {
    const shuffledItems = shuffleArray(bingoItems);
    const neededExtras = 25 - shuffledItems.length;
    const extraItems = shuffleArray(bingoItems).slice(0, neededExtras);

    const fullBoardStrings = shuffleArray([...shuffledItems, ...extraItems]);
    return fullBoardStrings.map(text => ({ text, active: false }));
}

function saveState(state: BingoCell[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState(): BingoCell[] | null {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { return JSON.parse(saved); }
        catch (e) { return null; }
    }
    return null;
}

function renderBoard() {
    const boardContainer = document.getElementById('bingo-board');
    if (!boardContainer) return;

    boardContainer.innerHTML = '';
    let currentState = loadState();

    if (!currentState) {
        currentState = generateNewBoard();
        saveState(currentState);
    }

    let currentBingoCount = countBingos(currentState);

    currentState.forEach((cell, index) => {
        const cellEl = document.createElement('div');
        cellEl.className = `cell ${cell.active ? 'active' : ''}`;
        cellEl.innerText = cell.text;

        cellEl.addEventListener('click', () => {
            // Odtwarzanie dźwięku
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});

            cell.active = !cell.active;
            cellEl.classList.toggle('active');

            const stateToUpdate = loadState();
            if(stateToUpdate) {
                stateToUpdate[index].active = cell.active;
                saveState(stateToUpdate);

                // Sprawdzanie czy wpadło nowe bingo
                const newBingoCount = countBingos(stateToUpdate);
                if (newBingoCount > currentBingoCount) {
                    triggerConfetti();
                }
                currentBingoCount = newBingoCount;
            }
        });

        boardContainer.appendChild(cellEl);
    });
}

document.getElementById('new-board-btn')?.addEventListener('click', () => {
    if(confirm('Czy na pewno chcesz wygenerować nową tablicę? Twój dotychczasowy postęp zostanie usunięty.')) {
        const newState = generateNewBoard();
        saveState(newState);
        renderBoard();
    }
});

// Start
initTheme();
renderBoard();

// --- LOGIKA INTERAKTYWNEJ GRAFIKI I DŹWIĘKÓW ---

const interactiveImg = document.getElementById('interactive-img');

const boingSound = new Audio('sound.mp3');
const catSoundRare = new Audio('sound_rare.mp3');

interactiveImg?.addEventListener('click', () => {
    boingSound.currentTime = 0; // Reset the sound if clicked again
    catSoundRare.currentTime = 0;

    let rdm = Math.random() * 100;

    // Playing the sound
    if (rdm < 5){
        catSoundRare.play().catch(e => console.error("ERROR: Sound problem", e));
    } else {
        boingSound.play().catch(e => console.error("ERROR: Sound problem", e));
    }
});