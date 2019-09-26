import React from 'react';
import './PortfolioArticles.scss';
import GoBackBtn from '../../Buttons/GoBackBtn/GoBackBtn';

export default function CohenPoNowatorsku({ scrollToTop }) {
  scrollToTop();
  return (
    <div className='article__container'>
      <GoBackBtn linkTo={'/portfolio-dziennikarskie'} btnText={'Powrót'} />
      <h1>Cohen po nowatorsku</h1>
      <p className='article__intro'>
        Przez lata monopol na tłumaczenia pieśni L. Cohena miał w Polsce świętej pamięci Maciej
        Zembaty. Nowy zestaw pieśni kanadyjskiego mistrza w świeżych przekładach proponuje
        słuchaczom Michał Łanuszka. Jego płyta, nazwana po prostu „Łanuszka / Cohen” to zestaw
        jedenastu coverów w przekładach Michała Kuźmińskiego.
      </p>
      <p>
        Od pierwszych dźwięków słychać, że autorzy podeszli do materiału łącząc nowatorskie aranże z
        odważnymi, różniącymi się od klasyków przekładami. Otwierający album utwór „Suzanne”
        pozbawiony jest charakterystycznego motywu gitary klasycznej. Zastępuje ją gitara
        elektryczna, grająca ciekawie i ze smakiem. Bas pracuje mocno, bębny robią świetne, silne
        tło, a jednak „Zuzanna” nie traci swego balladowego czaru. Łanuszka śpiewa spokojnie, nie
        popisuje się, jakby celowo podchodził do melodii na modłę Cohena. Wszystko brzmi niezwykle
        hipnotycznie i ciekawie.
      </p>
      <p>
        Nowoczesne połączenie gitar elektrycznych i akustycznych obecne jest również w drugim
        utworze, będącym polską wersją „Alexandra Leaving” – „Aleksandra odchodzi”. Magiczna
        balladowość jest obecna i tutaj, a wokal Łanuszki dopełnia dzieła. Wszystko brzmi po prostu
        świetnie.
      </p>
      <p>
        Po „Aleksandrze” następuje nastrojowy utwór, który promował album jako singiel – „Jestem
        twój”. Zagadkowa gitara, nastrojowy wokal, świetne słowa.
      </p>
      <p>
        Oddech od wolnych ballad daje momentami nieco dynamiczniejszy „Dla Ciebie walc”. Potem
        dostajemy pięknie taneczne „Tańczmy po miłości śmierć” i ciekawie knajpiane „Nadszedł kres”,
        w którym usłyszeć można przesterowaną gitarę (!), oraz klimatyczne, mocne bębny. To dotąd
        najmocniejszy moment płyty. Zaraz po nim następuje powrót do ballad – „Chelsea Hotel #2”, „W
        stu pocałunków toń” i Hallelujah”. Smaczki muzyczne, głęboki, jakby gardłowy wokal, dodana
        damska wokaliza, świetne przekłady… Czy to nie nudne?
      </p>
      <p>
        Absolutnie nie. Ta płyta taka po prostu jest – bardzo dobra. W aurze jesiennej słucha się
        jej wręcz znakomicie. Przekłady (bez wdawania się w szczegóły) są równie świetne. Nie
        słychać, by tłumacz, na co dzień będący literatem, gdziekolwiek był zmuszony skapitulować
        czy przekalkować jakiekolwiek wyrażenie na Polski. Zamiast tego, słuchacz otrzymuje ciekawą
        grę metafor i opisów, piękne określenia. Co ważne, wszystko to dobrze koresponduje z
        przekazem oryginalnych liryków Cohena – podobno sam On zaakceptował wszystkie przekłady.
      </p>
      <p>
        Po „Hallelujah” – „Słynny niebieski płaszcz”, czyli utwór, którego tłumaczenie (obok np.
        „Tańczmy…”) zahacza wręcz o literacki sport ekstremalny. Wyszło świetnie i nie waham się
        pisząc, że akurat ten poemat (i nie tylko ten) Kuźmiński przetłumaczył lepiej niż Zembaty
        (za którego przekładami, z całym szacunkiem, nigdy nie przepadałem). Za dowód niech służy
        jeden fragment. W oryginale brzmi on: “Ah, the last time we saw you / You looked so much
        older / Your famous blue raincoat / Was torn at the shoulder”. Michał Kuźmiński ujął go
        słowami: „Ostatnio czas mocno się z Tobą rozprawił / Twój słynny niebieski płaszcz spruł się
        w rękawie”. Jako anglista stwierdzam – kawał dobrej roboty.
      </p>
      <p>
        Ostatni na trackliście jest „Poczekaj, nie można się tak przecież rozstawać”. Utwór ten nie
        odbiega poziomem od reszty, nie jest jednak kompozycją wieńczącą dzieło – ukryta na końcu
        alternatywna wersja „Aleksandra odchodzi” zamyka album skutecznie i pięknie.
      </p>
      <p>
        Płyta „Łanuszka / Cohen” to pozycja bardzo dobra, nowatorska oraz dopracowana. I nie, nikt
        nie zapłacił mi za napisanie tego, ta recenzja nie jest sponsorowana przez autorów, żaden z
        nich nie jest też moją rodziną. Album jest po prostu świetny, nie ma praktycznie słabych
        punktów. Idealny prezent świąteczny dla wrażliwych fanów Cohena, którzy cenią kunszt
        liryczny i muzyczny. Reasumując – serdecznie polecam.
      </p>
      <p className='article__signature'>Bartek Piwowarczyk</p>
      <p className='article__footnotes'>Data publikacji: 4 grudnia 2014</p>
      <GoBackBtn linkTo={'/portfolio-dziennikarskie'} btnText={'Powrót'} />
    </div>
  );
}
