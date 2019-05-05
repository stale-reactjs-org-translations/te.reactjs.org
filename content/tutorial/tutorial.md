---
id: tutorial
title: "పాఠము: రియాక్టుకు పరిచయము"
layout: tutorial
sectionid: tutorial
permalink: tutorial/tutorial.html
redirect_from:
  - "docs/tutorial.html"
  - "docs/why-react.html"
  - "docs/tutorial-ja-JP.html"
  - "docs/tutorial-ko-KR.html"
  - "docs/tutorial-zh-CN.html"
---

ఈ పాఠములో మీకు రియాక్ట్ తెలుసు  అని మేము అనుకోవడం లేదు.

## పాఠం మొదలు పెట్టె ముందు {#before-we-start-the-tutorial}

ఇందులో మనము ఒక చిన్ని ఆటని చేద్దాం, సరేనా. **మీరేంటి ఆటలేంటి అని పక్కకు నెట్టేద్దాం అనుకుంటున్నారా  -- ఒకసారి ఆగండి.** రియాక్టులో మీరు అద్భుతమైన యాప్స్ కనిపెట్టడానికి ఈ పాఠంలో మీరు నేర్చుకొనే మెళకువలు ఎంతో అవసరం, వీటిని సాధన చేస్తే మీకు రియాక్టులో ఎదురే లేదు.

>సలహా
>
>**చదువుతూ చేద్దాం** అనుకుని బయలుదేరిన వారికి ఈ పాఠం సరిగ్గా సరిపోతుంది. ఒకవేళ మీరు మొదటి నుండి విషయాలన్నీ ఒక్కొక్కటిగా నేర్చుకోవాలి అనుకుంటే, మా [అంచెలంచెల గైడ్](/docs/hello-world.html)ను చుడండి. ఈ పాఠం, ఆ గైడ్ ఒక దానికి ఒకటి ధీటుగా ఉంటాయి.

ఈ పాఠం క్రింది విధంగా విభజించ బడినది:

* [పాఠం కోసం సెటప్](#setup-for-the-tutorial) పాఠంలో చెప్పిన విషయాలని తెలుసుకొనే క్రమంలో ఒక **పునాది రాయి**.
* [వృత్తాన్తం](#overview) రియాక్టు యొక్క **మూల సిద్ధాంతాలు** నేర్పుతుంది: కంపోనెంట్స్, ప్రాప్స్, మరియు స్టేట్.
* [ఆటని ముగించుట](#completing-the-game) రియాక్ట్ కోడింగులో **బాగా వాడబడే మెళకువలను** నేర్పుతుంది.
* [సమయంలో ప్రయాణాన్ని జోడించుట](#adding-time-travel) రియాక్టు యొక్క అపూర్వమైన బలాలను గురించి **లోతైన అవగాహన** గురించి నేర్పుతుంది.

ఈ విభాగాలన్నీ పని కట్టుకుని ఒకేసారి నేర్చేసుకోవలసిన అవసరం ఏమి లేదు. ఎంత వీలైతే అంతే నేర్చుకోండి -- అది ఒకటి లేక రెండు విభాగాలు అయినా ఫర్వాలేదు.

### అసలు మనము ఏమి తయారు చేస్తున్నాము అంటే? {#what-are-we-building}

ఈ పాఠంలో, ఒక అద్భుతమైన tic-tac-toe ఆటను రియాక్టులో చేద్దాం.

మనం ఏమి తయారు చేయబోతున్నామో దాన్ని ఇక్కడ ముందే చూడొచ్చు: **[ఫలితం](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**. మీరు చూస్తున్న కోడ్ మీకు అర్ధం కావట్లేదా ఇంకా, ఆ సింటాక్స్ కొంచెం విచిత్రంగా ఉందా, భయపడకండి! ఈ పాఠం మీరు రియాక్ట్ సింటాక్స్ అలవాటు చేసుకోడానికి సహాయం చేస్తుంది.

మా  సలహా ఏంటంటే, ఒకసారి tic-tac-toe ఆట ఎలా ఆడతారో తెలుసుకోండి. మీరు గమనిస్తే, ఆ ఆటలో కుడివైపు ఒక పట్టిక ఉంది. ఆ పట్టిక మనము ఇదివరకు ఏమేమి ఎత్తులు వేశామో చూపిస్తోంది, అది మనం వేసే ప్రతి ఎత్తుకు నవీకరించ బడుతుంది.

మీకు ఒకసారి అర్ధం అయ్యాక ఆ tic-tac-game గురించి వదిలేయండి. ఒక సుళువైన టెంప్లేట్తో ఈ పాఠాన్ని మనం ప్రారంభిద్దాం. తదుపరి అంశంలో మీరు ఈ ఆట తయారీని ప్రారంభించేందుకు కావలిసిన సామగ్రి గురించి తెలుసుకుంటారు.

### ముందుగా కావలసినవి {#prerequisites}

మీకు HTML మరియు JavaScript ఇదివరకే తెలుసునని మేము భావిస్తాము, అయితే మీరు వేరే భాషా పరివారం నుండి వచ్చినవారు అయినా సరే ఈ పాఠాన్ని ఇబ్బంది లేకుండా అర్ధం చేసుకోవచ్చు. ఇంకో విషయం, మీకు ఫంక్షన్స్, ఆబ్జెక్ట్స్, ఆరేయ్స్, లాంటి అంశాల గురించి తెలుసని అనుకుంటున్నాం, కాస్త క్లాసెస్ గురించి కూడా.

JavaScript గురించి నేర్చుకోవాలా, [ఈ గైడ్](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) చుడండి. గమనించాల్సింది ఏమిటంటే మేము ES6 అనే ఆధునిక పద్ధతులు కూడా కొన్ని ఉపయోగిస్తున్నాము. ప్రత్యేకంగా మేము [యారో ఫంక్షన్స్](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [క్లాసెస్](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [`లెట్`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and [`కాన్స్ట్`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) వగైరాలు వాడాము. కుతూహలం ఉంటె [బాబెల్ REPL](babel://es5-syntax-example) వాడి ఈ ES6 ఏ విధంగా కంపైల్ అవుతుందో తెలుసుకోండి.

## పాఠం కోసం సెటప్ {#setup-for-the-tutorial}

ఈ పాఠాన్ని పూర్తి చేయడానికి మీకు రెండు మార్గాలు ఉన్నాయి: మీరు మీ బ్రౌజర్లో కోడ్ వ్రాయవచ్చు లేదా మీరు మీ కంప్యూటర్లో ఒక లోకల్ డెవలప్మెంట్ పర్యావరణాన్ని సెటప్ చేయవచ్చు.

### సెటప్ ఎంపిక 1: బ్రౌజర్ లోనే నేర్చుకోండి {#setup-option-1-write-code-in-the-browser}

ఇది ప్రారంభించడానికి త్వరిత మార్గం!

ముందుగా, ఈ ** [స్టార్టర్ కోడ్] (https://codepen.io/gaearon/pen/oWWQNa?editors=0010) **ను క్రొత్త ట్యాబ్లో తెరవండి. కొత్త ట్యాబ్ ఖాళీ tic-tac-toe ఆట బోర్డ్ను మరియు రియాక్ట్ కోడ్ను చూపిస్తుంది. మనము ఈ పాఠంలో రియాక్ట్ కోడ్ను ఎడిట్ చేసి నేర్చుకుందాము.

మీరు ఇప్పటికి ఈ క్రింది రెండవ సెటప్ ఐచ్చికను దాటేయొచ్చు మరియు రియాక్ట్ యొక్క సారాంశం గురించి తెలిపే [పర్యావలోకనం] (#overview) విభాగానికి వెళ్లవచ్చు.

### సెటప్ ఎంపిక 2: లోకల్ డెవలప్మెంట్ పర్యావరణం {#setup-option-2-local-development-environment}

ఈ పాఠానికి సంబంధించినంత వరకు, ఇది పూర్తిగా ఐచ్ఛికం, అంటే కచ్చితంగా అవసరం లేదు!

<br>

<details>

<summary><b>ఐచ్ఛికం: మీ ఇష్టమైన ఎడిటర్ను ఉపయోగించి నేర్చుకునేందుకు స్థానికంగా అనుసరించ వలసిన సూచనలు</b></summary>

ఈ సెటప్కి కొంత పని అవసరం కానీ దీనివల్ల మీకు నచ్చిన ఎడిటర్లో మీరు ఈ పాఠాన్ని నేర్చుకోవచ్చు. ఈ క్రింది సూచనలను అనుసరించండి:

1. మీదగ్గర [Node.js](https://nodejs.org/en/) యొక్క అత్యంత నవీనమైన వెర్షన్ ఇంస్టాల్ అయి ఉండాలి.
2. [Create React App యొక్క ఇన్స్టలేషన్ సూచనలు](/docs/create-a-new-react-app.html#create-react-app) అనుసరించి కొత్త ప్రాజెక్ట్ తయారు చేయండి.

```bash
npx create-react-app my-app
```

3. కొత్తగా ఏర్పడిన ప్రాజెక్టులో `src/` లో ఉన్న అన్ని ఫైళ్లను పీకేయండి

> Note:
>
>** గమనించండి `src` ఫోల్డర్ మొత్తాన్ని పీకేయకుండా, కేవలం అందులో ఉన్న ఫైళ్లను మాత్రమే తొలగించండి.** ఆ ఫైళ్ల బదులుగా మనం నేర్చుకునే కొద్దీ కొత్త ఫైళ్లను మనం తయారు చేసుకుంటాము.

```bash
cd my-app
cd src

# మీరు Mac లేదా Linux వాడుతున్నట్టు అయితే:
rm -f *

# లేకపోతే, మీరు Windows వాడితే:
del *

# తర్వాతా, మీ ప్రాజెక్ట్ ఫోల్డర్ దగ్గరికి వెళ్ళడానికి:
cd ..
```

4. `index.css` అనే ఫైలును `src/` అనే ఫోల్డరులో పెట్టి [ఈ CSS కోడ్ను](https://codepen.io/gaearon/pen/oWWQNa?editors=0100) నింపండి.

5. `index.js` అనే ఫైలును `src/`లో పెట్టి [ఈ JS కోడ్ను](https://codepen.io/gaearon/pen/oWWQNa?editors=0010) నింపండి.

6. ఈ క్రింది మూడు లైన్లను `src/` ఫోల్డరులో ఉన్న `index.js` ఫైలులో మొదట్లో పెట్టండి:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

ఇప్పుడు మీరు టెర్మినల్లో `npm start` కొట్టి `http://localhost:3000`ను మీ బ్రౌజర్లో కొడితే, ఒక ఖాళీ tic-tac-toe ఫీల్డ్ కనిపిస్తుంది.

మా సలహా ఏమిటంటే [ఈ సూచనలను](https://babeljs.io/docs/editors/) వాడి మీ ఎడిటర్లో సింటాక్స్ హైలైటింగ్ చేసుకోండి.

</details>

### చిక్కుకుపోయా, సాయం చేయండి! {#help-im-stuck}

మీకు ఏమి చేయాలో తెలియట్లేదా, [కమ్యూనిటీ మద్దతు వనరులు](/community/support.html) చుడండి. మరీ ముఖ్యంగా, [Reactiflux చాట్](https://discord.gg/0ZcbPKXt5bZjGY5n) అనేది త్వరగా సాయం పొందడానికి ఒక అద్భుతమైన మార్గం. అయినా సమాధానం దొరకకపోయినా లేక ఇంకా మీరు ఇబ్బంది పడుతున్నా, ఒక ఇష్యూ ఫైల్ చేయండి, మేము మిమ్మల్ని రక్షిస్తాము.

## పర్యావలోకనం {#overview}

మీరు సిద్ధం అయ్యారు గనుక, ఇప్పుడు మనం రియాక్ట్ యొక్క సమగ్ర రూపాన్ని తెలుసుకుందాము!

### అసలు రియాక్ట్ అంటే ఏమిటి? {#what-is-react}

రియాక్ట్ అనేది యూజర్ ఇంటరుఫేసులు తయారు చేసేందుకు ఉపయోగపడే ఒక డిక్లరేటివ్ అయిన, సమర్థవంతమైన మరియు అనువైన JavaScript లైబ్రరీ. క్లిష్టమైన UIలను "కంపోనెంట్లు" అనే చిన్న చిన్న వివిక్త కోడు ముక్కలను వాడి కంపోజ్ చేస్తుంది.

రియాక్టులో చాలా రకాలైన కంపోనెంట్లు ఉన్నాయి, ముందుగా `React.Component` సబ్ క్లాసుల గురించి తెలుసుకుందాము:

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// ఉదాహరణకి ఇలా వాడొచ్చు: <ShoppingList name="Mark" />
```

ఈ సరదాయైన XML-లా కనిపించే టాగ్స్ గురించి త్వరలోనే తెలుసుకుంటాము. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

ఇక్కడ, ShoppingListని **రియాక్ట్ కంపోనెంట్ క్లాస్**, లేక **రియాక్ట్ కంపోనెంట్ టైపు** అంటారు. ఒక కంపోనెంట్ కొన్ని `props` ("ప్రాపర్టీస్" కి చిన్న రూపము) తీసుకుని, `render` మెథడ్ ద్వారా కొన్ని వ్యూస్ ని ఇస్తుంది.

ఆ `render` మెథడ్ అనేది మనకి కనిపించే విషయం అంతా మనకి ఇస్తుంది. రియాక్ట్ ఆ విషయాన్ని అంతా తీసుకుని మనకి చుపించాల్సింది చూపిస్తుంది. ముఖ్యంగా, `render` మనకి ఒక **రియాక్ట్ ఎలిమెంట్**ని ఇస్తుంది, ఇది రెండర్ చేయాల్సిన దానికి సంబంధించిన తత్సమాన విషయం అనవచ్చు. చాలా వరకు రియాక్ట్ డెవలపర్స్ "JSX" అనే సింటాక్స్ వాడతారు ఎందుకంటే దానివల్ల ఈ నిర్మాణాలు చేయడం కొంచం సులువుగా ఉంటుంది. బిల్డ్ టైములో ఈ `<div />` సింటాక్స్ కాస్తా `React.createElement('div')`లాగ రూపాంతరం చెందుతుంది. పైన చెప్పిన ఉదాహరణ ఇలా మారుతుంది:

```javascript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```

[పూర్తి వెర్షన్ చూడండి.](babel://tutorial-expanded-version)

మీకు కుతూహలం ఉంటే, `createElement()` గురించి మరింత వివరంగా తెలుసుకోడానికి [API రిఫరెన్స్](/docs/react-api.html#createelement) చుడండి, ఇక్కడైతే ఇంతకన్నా ఎక్కువ ప్రస్తావించుకోము. దానికి బదులుగా, మనము JSX వాడదాము.

JSX అనేది JavaScript యొక్క పూర్తి శక్తిని పొందినది. మీరు *ఎటువంటి* JavaScript ఎక్స్ప్రెషన్ అయినా కర్లీ బ్రేసెస్ లో పెట్టొచ్చు. ప్రతీ రియాక్ట్ ఎలిమెంట్ అనేది ఒక JavaScript ఆబ్జెక్ట్ కాబట్టి, మనం దానిని ఒక వేరియబుల్లో పెట్టొచ్చు మరియు ఎక్కడికైనా పంపవచ్చు.

ఈ `ShoppingList` కంపోనెంట్ కేవలం `<div />` మరియు `<li />` లనే రెండర్ చేస్తుంది. అయితే మీరు కస్టమ్ రియాక్ట్ కంపోనెంట్స్ కూడా రెండర్ చేసుకోవచ్చు. ఉదాహరణకు, మనం ఆ షాపింగ్ లిస్టు కంపోనెంటు మొత్తాన్ని `<ShoppingList />` అని పరిగణించ వచ్చు. ప్రతి రియాక్ట్ కంపోనెంటు దాని మటుకు అదే వ్యవహరిస్తోంది కనుక మీరు దానికి స్వతంత్రంగానే వాడుకోవచ్చు; దీని వాళ్ళ మీరు చాలా క్లిష్టమైన UIలను చాలా సాధారణ కంపోనెంట్లు వాడి చేయవచ్చు.

## మన స్టార్టర్ కోడును ఒకసారి చుడండి {#inspecting-the-starter-code}

మీరు ఈ పాఠాన్ని **బ్రౌజరులో** చేస్తుంటే కనుక, దీనిని కొత్త ట్యాబులో చుడండి: **[స్టార్టర్ కోడ్](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)**. అదే మీరు ఈ పాఠాన్ని **లోకలుగా** చూస్తుంటే గనుక, ఈసారి `src/index.js`ని మీ ప్రాజెక్టు ఫోల్డరులో తెరవండి (మీరు ఇదివరకే దీనిని తెరిచి ఉన్నారు, ఇక్కడ చుడండి: [సెటప్](#setup-option-2-local-development-environment)).

ఈ స్టార్టర్ కోడ్ వాడే మనము ఈ పాఠాన్ని నేర్చుకోబోతున్నాము. మీరు కేవలం రియాక్టు మీద దృష్టి నిలిపి ఈ tic-tac-toe ఆటను తయారు చేసేందుకు వీలుగా మేము కొంత CSS కోడ్ ముందుగానే ఇక్కడ ఇచ్చేసాము.

ఈ కోడును తరచి చూస్తే, మన దగ్గర మూడు కంపోనెంట్లు ఉన్నాయని మీకు తెలుస్తుంది:

* Sqaure
* Board
* Game

ఈ Square కంపోనెంటు ఒకేఒక్క `<button>` ను రెండర్ చేస్తుంది ఇంకా ఈ Board సంగతికొస్తే 9 squareలు రెండర్ చేస్తుంది. ఇహ మన Game కంపోనెంట్ విషయానికొస్తే, అది ఒక boardను దాని యొక్క ప్లేసుహోల్డర్ వాల్యూలతో సహా రెండర్ చేసి, తరువాత మనం మార్చుకోడానికి అనువుగా ఇస్తుంది. ఇప్పటికి మన కంపోనెంట్లు ఒకదానితో ఒకటి ఇంకా ముచ్చటించుకోవట్లేదు.

### డాటాను ప్రాప్స్ ద్వారా పంపించుట {#passing-data-through-props}

ఇప్పుడే సంగతి కాస్త రసపట్టులో పడింది, ఇప్పుడు మనం మన Board కంపోనెంటు నుండి ఈ Square కంపోనెంటుకు డేటా పంపించే వేళయింది.

మేము బల్ల గుద్ది చెప్పే సంగతేంటంటే, బొత్తిగా కాపీ/పేస్టు కొట్టేకంటే మాతో పాటు కోడ్ను టైపు చేసినట్లు అయితే మీకు చాలా ఉపయోగకరంగా ఉంటుంది.
దీనివల్ల మీకు ఈ విషయాలు త్వరగా మరియు దీర్ఘకాలికంగా గుర్తుండిపోతాయి (మజిల్ మెమొరీ అంటారుగా).

ఇప్పుడు మన Board యొక్క `renderSquare` మెథడ్లో, `value` అనే ప్రాపుని Squareకు పంపించే విధంగా మన కోడ్ను సవరించండి:

```js{3}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
```

తరువాత Square యొక్క `render` మెథడ్లో `{/* TODO */}`ను లేపేసి `{this.props.value}`ను జొప్పించండి:

```js{5}
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

అంతకుముందు:

![React Devtools](../images/tutorial/tictac-empty.png)

ఆ తరువాత: గమనిస్తే ఇప్పుడు ప్రతి చతురస్రంలో ఒక అంకె కనిపిస్తుంది.

![React Devtools](../images/tutorial/tictac-numbers.png)

**[ఇప్పటిదాకా రాసిన మొత్తాన్ని ఇక్కడ చూడండి](https://codepen.io/gaearon/pen/aWWQOG?editors=0010)**

శుభాకాంక్షలండోయ్! మీరు ఇప్పుడు Board కంపోనెంటు నుండి దాని చైల్డ్ కంపోనెంటు Sqaureకు "ప్రాపును పంపారోచ్". ఇలా ప్రాప్స్ ఒక తల్లి కంపోనెంటు నుండి ఒక పిల్ల కంపోనెంటుకు పంపుకోవడం ద్వారా మన డేటా లేదా ఇన్ఫర్మేషన్ ప్రవహిస్తుంది.

### కంపోనెంట్ను ఇంటరాక్టివ్ గా చేయుట {#making-an-interactive-component}

Let's fill the Square component with an "X" when we click it.
First, change the button tag that is returned from the Square component's `render()` function to this:

```javascript{4}
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
```

If you click on a Square now, you should see an alert in your browser.

>Note
>
>To save typing and avoid the [confusing behavior of `this`](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/), we will use the [arrow function syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for event handlers here and further below:
>
>```javascript{4}
>class Square extends React.Component {
>  render() {
>    return (
>      <button className="square" onClick={() => alert('click')}>
>        {this.props.value}
>      </button>
>    );
>  }
>}
>```
>
>Notice how with `onClick={() => alert('click')}`, we're passing *a function* as the `onClick` prop. React will only call this function after a click. Forgetting `() =>` and writing `onClick={alert('click')}` is a common mistake, and would fire the alert every time the component re-renders.

As a next step, we want the Square component to "remember" that it got clicked, and fill it with an "X" mark. To "remember" things, components use **state**.

React components can have state by setting `this.state` in their constructors. `this.state` should be considered as private to a React component that it's defined in. Let's store the current value of the Square in `this.state`, and change it when the Square is clicked.

First, we'll add a constructor to the class to initialize the state:

```javascript{2-7}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

>Note
>
>In [JavaScript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), you need to always call `super` when defining the constructor of a subclass. All React component classes that have a `constructor` should start it with a `super(props)` call.

Now we'll change the Square's `render` method to display the current state's value when clicked:

* Replace `this.props.value` with `this.state.value` inside the `<button>` tag.
* Replace the `onClick={...}` event handler with `onClick={() => this.setState({value: 'X'})}`.
* Put the `className` and `onClick` props on separate lines for better readability.

After these changes, the `<button>` tag that is returned by the Square's `render` method looks like this:

```javascript{12-13,15}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

By calling `this.setState` from an `onClick` handler in the Square's `render` method, we tell React to re-render that Square whenever its `<button>` is clicked. After the update, the Square's `this.state.value` will be `'X'`, so we'll see the `X` on the game board. If you click on any Square, an `X` should show up.

When you call `setState` in a component, React automatically updates the child components inside of it too.

**[View the full code at this point](https://codepen.io/gaearon/pen/VbbVLg?editors=0010)**

### Developer Tools {#developer-tools}

The React Devtools extension for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) lets you inspect a React component tree with your browser's developer tools.

<img src="../images/tutorial/devtools.png" alt="React Devtools" style="max-width: 100%">

The React DevTools let you check the props and the state of your React components.

After installing React DevTools, you can right-click on any element on the page, click "Inspect" to open the developer tools, and the React tab will appear as the last tab to the right.

**However, note there are a few extra steps to get it working with CodePen:**

1. Log in or register and confirm your email (required to prevent spam).
2. Click the "Fork" button.
3. Click "Change View" and then choose "Debug mode".
4. In the new tab that opens, the devtools should now have a React tab.

## Completing the Game {#completing-the-game}

We now have the basic building blocks for our tic-tac-toe game. To have a complete game, we now need to alternate placing "X"s and "O"s on the board, and we need a way to determine a winner.

### Lifting State Up {#lifting-state-up}

Currently, each Square component maintains the game's state. To check for a winner, we'll maintain the value of each of the 9 squares in one location.

We may think that Board should just ask each Square for the Square's state. Although this approach is possible in React, we discourage it because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store the game's state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, [just like we did when we passed a number to each Square](#passing-data-through-props).

**To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.**

Lifting state into a parent component is common when React components are refactored -- let's take this opportunity to try it out.

Add a constructor to the Board and set the Board's initial state to contain an array of 9 nulls corresponding to the 9 squares:

```javascript{2-7}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }
```

When we fill the board in later, the `this.state.squares` array will look something like this:

```javascript
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```

The Board's `renderSquare` method currently looks like this:

```javascript
  renderSquare(i) {
    return <Square value={i} />;
  }
```

In the beginning, we [passed the `value` prop down](#passing-data-through-props) from the Board to show numbers from 0 to 8 in every Square. In a different previous step, we replaced the numbers with an "X" mark [determined by Square's own state](#making-an-interactive-component). This is why Square currently ignores the `value` prop passed to it by the Board.

We will now use the prop passing mechanism again. We will modify the Board to instruct each individual Square about its current value (`'X'`, `'O'`, or `null`). We have already defined the `squares` array in the Board's constructor, and we will modify the Board's `renderSquare` method to read from it:

```javascript{2}
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

**[View the full code at this point](https://codepen.io/gaearon/pen/gWWQPY?editors=0010)**

Each Square will now receive a `value` prop that will either be `'X'`, `'O'`, or `null` for empty squares.

Next, we need to change what happens when a Square is clicked. The Board component now maintains which squares are filled. We need to create a way for the Square to update the Board's state. Since state is considered to be private to a component that defines it, we cannot update the Board's state directly from Square.

Instead, we'll pass down a function from the Board to the Square, and we'll have Square call that function when a square is clicked. We'll change the `renderSquare` method in Board to:

```javascript{5}
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```

>Note
>
>We split the returned element into multiple lines for readability, and added parentheses so that JavaScript doesn't insert a semicolon after `return` and break our code.

Now we're passing down two props from Board to Square: `value` and `onClick`. The `onClick` prop is a function that Square can call when clicked. We'll make the following changes to Square:

* Replace `this.state.value` with `this.props.value` in Square's `render` method
* Replace `this.setState()` with `this.props.onClick()` in Square's `render` method
* Delete the `constructor` from Square because Square no longer keeps track of the game's state

After these changes, the Square component looks like this:

```javascript{1,2,6,8}
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

When a Square is clicked, the `onClick` function provided by the Board is called. Here's a review of how this is achieved:

1. The `onClick` prop on the built-in DOM `<button>` component tells React to set up a click event listener.
2. When the button is clicked, React will call the `onClick` event handler that is defined in Square's `render()` method.
3. This event handler calls `this.props.onClick()`. The Square's `onClick` prop was specified by the Board.
4. Since the Board passed `onClick={() => this.handleClick(i)}` to Square, the Square calls `this.handleClick(i)` when clicked.
5. We have not defined the `handleClick()` method yet, so our code crashes. If you click a square now, you should see a red error screen saying something like "this.handleClick is not a function".

>Note
>
>The DOM `<button>` element's `onClick` attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. We could give any name to the Square's `onClick` prop or Board's `handleClick` method, and the code would work the same. In React, it's conventional to use `on[Event]` names for props which represent events and `handle[Event]` for the methods which handle the events.

When we try to click a Square, we should get an error because we haven't defined `handleClick` yet. We'll now add `handleClick` to the Board class:

```javascript{9-13}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[View the full code at this point](https://codepen.io/gaearon/pen/ybbQJX?editors=0010)**

After these changes, we're again able to click on the Squares to fill them, the same as we had before. However, now the state is stored in the Board component instead of the individual Square components. When the Board's state changes, the Square components re-render automatically. Keeping the state of all squares in the Board component will allow it to determine the winner in the future.

Since the Square components no longer maintain state, the Square components receive values from the Board component and inform the Board component when they're clicked. In React terms, the Square components are now **controlled components**. The Board has full control over them.

Note how in `handleClick`, we call `.slice()` to create a copy of the `squares` array to modify instead of modifying the existing array. We will explain why we create a copy of the `squares` array in the next section.

### Why Immutability Is Important {#why-immutability-is-important}

In the previous code example, we suggested that you use the `.slice()` operator to create a copy of the `squares` array to modify instead of modifying the existing array. We'll now discuss immutability and why immutability is important to learn.

There are generally two approaches to changing data. The first approach is to *mutate* the data by directly changing the data's values. The second approach is to replace the data with a new copy which has the desired changes.

#### Data Change with Mutation {#data-change-with-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```

#### Data Change without Mutation {#data-change-without-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};
```

The end result is the same but by not mutating (or changing the underlying data) directly, we gain several benefits described below.

#### Complex Features Become Simple {#complex-features-become-simple}

Immutability makes complex features much easier to implement. Later in this tutorial, we will implement a "time travel" feature that allows us to review the tic-tac-toe game's history and "jump back" to previous moves. This functionality isn't specific to games -- an ability to undo and redo certain actions is a common requirement in applications. Avoiding direct data mutation lets us keep previous versions of the game's history intact, and reuse them later.

#### Detecting Changes {#detecting-changes}

Detecting changes in mutable objects is difficult because they are modified directly. This detection requires the mutable object to be compared to previous copies of itself and the entire object tree to be traversed.

Detecting changes in immutable objects is considerably easier. If the immutable object that is being referenced is different than the previous one, then the object has changed.

#### Determining When to Re-Render in React {#determining-when-to-re-render-in-react}

The main benefit of immutability is that it helps you build _pure components_ in React. Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering.

You can learn more about `shouldComponentUpdate()` and how you can build *pure components* by reading [Optimizing Performance](/docs/optimizing-performance.html#examples).

### Function Components {#function-components}

We'll now change the Square to be a **function component**.

In React, **function components** are a simpler way to write components that only contain a `render` method and don't have their own state. Instead of defining a class which extends `React.Component`, we can write a function that takes `props` as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

Replace the Square class with this function:

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

We have changed `this.props` to `props` both times it appears.

**[View the full code at this point](https://codepen.io/gaearon/pen/QvvJOv?editors=0010)**

>Note
>
>When we modified the Square to be a function component, we also changed `onClick={() => this.props.onClick()}` to a shorter `onClick={props.onClick}` (note the lack of parentheses on *both* sides).

### Taking Turns {#taking-turns}

We now need to fix an obvious defect in our tic-tac-toe game: the "O"s cannot be marked on the board.

We'll set the first move to be "X" by default. We can set this default by modifying the initial state in our Board constructor:

```javascript{6}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
```

Each time a player moves, `xIsNext` (a boolean) will be flipped to determine which player goes next and the game's state will be saved. We'll update the Board's `handleClick` function to flip the value of `xIsNext`:

```javascript{3,6}
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

With this change, "X"s and "O"s can take turns. Try it!

Let's also change the "status" text in Board's `render` so that it displays which player has the next turn:

```javascript{2}
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // the rest has not changed
```

After applying these changes, you should have this Board component:

```javascript{6,11-16,29}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[View the full code at this point](https://codepen.io/gaearon/pen/KmmrBy?editors=0010)**

### Declaring a Winner {#declaring-a-winner}

Now that we show which player's turn is next, we should also show when the game is won and there are no more turns to make. Copy this helper function and paste it at the end of the file:

```javascript
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

Given an array of 9 squares, this function will check for a winner and return `'X'`, `'O'`, or `null` as appropriate.

We will call `calculateWinner(squares)` in the Board's `render` function to check if a player has won. If a player has won, we can display text such as "Winner: X" or "Winner: O". We'll replace the `status` declaration in Board's `render` function with this code:

```javascript{2-8}
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      // the rest has not changed
```

We can now change the Board's `handleClick` function to return early by ignoring a click if someone has won the game or if a Square is already filled:

```javascript{3-5}
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

**[View the full code at this point](https://codepen.io/gaearon/pen/LyyXgK?editors=0010)**

Congratulations! You now have a working tic-tac-toe game. And you've just learned the basics of React too. So *you're* probably the real winner here.

## Adding Time Travel {#adding-time-travel}

As a final exercise, let's make it possible to "go back in time" to the previous moves in the game.

### Storing a History of Moves {#storing-a-history-of-moves}

If we mutated the `squares` array, implementing time travel would be very difficult.

However, we used `slice()` to create a new copy of the `squares` array after every move, and [treated it as immutable](#why-immutability-is-important). This will allow us to store every past version of the `squares` array, and navigate between the turns that have already happened.

We'll store the past `squares` arrays in another array called `history`. The `history` array represents all board states, from the first to the last move, and has a shape like this:

```javascript
history = [
  // Before first move
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  // After first move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // After second move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, 'O',
    ]
  },
  // ...
]
```

Now we need to decide which component should own the `history` state.

### Lifting State Up, Again {#lifting-state-up-again}

We'll want the top-level Game component to display a list of past moves. It will need access to the `history` to do that, so we will place the `history` state in the top-level Game component.

Placing the `history` state into the Game component lets us remove the `squares` state from its child Board component. Just like we ["lifted state up"](#lifting-state-up) from the Square component into the Board component, we are now lifting it up from the Board into the top-level Game component. This gives the Game component full control over the Board's data, and lets it instruct the Board to render previous turns from the `history`.

First, we'll set up the initial state for the Game component within its constructor:

```javascript{2-10}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
```

Next, we'll have the Board component receive `squares` and `onClick` props from the Game component. Since we now have a single click handler in Board for many Squares, we'll need to pass the location of each Square into the `onClick` handler to indicate which Square was clicked. Here are the required steps to transform the Board component:

* Delete the `constructor` in Board.
* Replace `this.state.squares[i]` with `this.props.squares[i]` in Board's `renderSquare`.
* Replace `this.handleClick(i)` with `this.props.onClick(i)` in Board's `renderSquare`.

The Board component now looks like this:

```javascript{17,18}
class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

We'll update the Game component's `render` function to use the most recent history entry to determine and display the game's status:

```javascript{2-11,16-19,22}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
```

Since the Game component is now rendering the game's status, we can remove the corresponding code from the Board's `render` method. After refactoring, the Board's `render` function looks like this:

```js{1-4}
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
```

Finally, we need to move the `handleClick` method from the Board component to the Game component. We also need to modify `handleClick` because the Game component's state is structured differently. Within the Game's `handleClick` method, we concatenate new history entries onto `history`.

```javascript{2-4,10-12}
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }
```

>Note
>
>Unlike the array `push()` method you might be more familiar with, the `concat()` method doesn't mutate the original array, so we prefer it.

At this point, the Board component only needs the `renderSquare` and `render` methods. The game's state and the `handleClick` method should be in the Game component.

**[View the full code at this point](https://codepen.io/gaearon/pen/EmmOqJ?editors=0010)**

### Showing the Past Moves {#showing-the-past-moves}

Since we are recording the tic-tac-toe game's history, we can now display it to the player as a list of past moves.

We learned earlier that React elements are first-class JavaScript objects; we can pass them around in our applications. To render multiple items in React, we can use an array of React elements.

In JavaScript, arrays have a [`map()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) that is commonly used for mapping data to other data, for example:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
```

Using the `map` method, we can map our history of moves to React elements representing buttons on the screen, and display a list of buttons to "jump" to past moves.

Let's `map` over the `history` in the Game's `render` method:

```javascript{6-15,34}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
```

**[View the full code at this point](https://codepen.io/gaearon/pen/EmmGEa?editors=0010)**

For each move in the tic-tac-toes's game's history, we create a list item `<li>` which contains a button `<button>`. The button has a `onClick` handler which calls a method called `this.jumpTo()`. We haven't implemented the `jumpTo()` method yet. For now, we should see a list of the moves that have occurred in the game and a warning in the developer tools console that says:

>  Warning:
>  Each child in an array or iterator should have a unique "key" prop. Check the render method of "Game".

Let's discuss what the above warning means.

### Picking a Key {#picking-a-key}

When we render a list, React stores some information about each rendered list item. When we update a list, React needs to determine what has changed. We could have added, removed, re-arranged, or updated the list's items.

Imagine transitioning from

```html
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

to

```html
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

In addition to the updated counts, a human reading this would probably say that we swapped Alexa and Ben's ordering and inserted Claudia between Alexa and Ben. However, React is a computer program and does not know what we intended. Because React cannot know our intentions, we need to specify a *key* property for each list item to differentiate each list item from its siblings. One option would be to use the strings `alexa`, `ben`, `claudia`. If we were displaying data from a database, Alexa, Ben, and Claudia's database IDs could be used as keys.

```html
<li key={user.id}>{user.name}: {user.taskCount} tasks left</li>
```

When a list is re-rendered, React takes each list item's key and searches the previous list's items for a matching key. If the current list has a key that didn't exist before, React creates a component. If the current list is missing a key that existed in the previous list, React destroys the previous component. If two keys match, the corresponding component is moved. Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component's key changes, the component will be destroyed and re-created with a new state.

`key` is a special and reserved property in React (along with `ref`, a more advanced feature). When an element is created, React extracts the `key` property and stores the key directly on the returned element. Even though `key` may look like it belongs in `props`, `key` cannot be referenced using `this.props.key`. React automatically uses `key` to decide which components to update. A component cannot inquire about its `key`.

**It's strongly recommended that you assign proper keys whenever you build dynamic lists.** If you don't have an appropriate key, you may want to consider restructuring your data so that you do.

If no key is specified, React will present a warning and use the array index as a key by default. Using the array index as a key is problematic when trying to re-order a list's items or inserting/removing list items. Explicitly passing `key={i}` silences the warning but has the same problems as array indices and is not recommended in most cases.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.


### Implementing Time Travel {#implementing-time-travel}

In the tic-tac-toe game's history, each past move has a unique ID associated with it: it's the sequential number of the move. The moves are never re-ordered, deleted, or inserted in the middle, so it's safe to use the move index as a key.

In the Game component's `render` method, we can add the key as `<li key={move}>` and React's warning about keys should disappear:

```js{6}
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
```

**[View the full code at this point](https://codepen.io/gaearon/pen/PmmXRE?editors=0010)**

Clicking any of the list item's buttons throws an error because the `jumpTo` method is undefined. Before we implement `jumpTo`, we'll add `stepNumber` to the Game component's state to indicate which step we're currently viewing.

First, add `stepNumber: 0` to the initial state in Game's `constructor`:

```js{8}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
```

Next, we'll define the `jumpTo` method in Game to update that `stepNumber`. We also set `xIsNext` to true if the number that we're changing `stepNumber` to is even:

```javascript{5-10}
  handleClick(i) {
    // this method has not changed
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    // this method has not changed
  }
```

We will now make a few changes to the Game's `handleClick` method which fires when you click on a square.

The `stepNumber` state we've added reflects the move displayed to the user now. After we make a new move, we need to update `stepNumber` by adding `stepNumber: history.length` as part of the `this.setState` argument. This ensures we don't get stuck showing the same move after a new one has been made.

We will also replace reading `this.state.history` with `this.state.history.slice(0, this.state.stepNumber + 1)`. This ensures that if we "go back in time" and then make a new move from that point, we throw away all the "future" history that would now become incorrect.

```javascript{2,13}
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
```

Finally, we will modify the Game component's `render` method from always rendering the last move to rendering the currently selected move according to `stepNumber`:

```javascript{3}
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // the rest has not changed
```

If we click on any step in the game's history, the tic-tac-toe board should immediately update to show what the board looked like after that step occurred.

**[View the full code at this point](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**

### Wrapping Up {#wrapping-up}

Congratulations! You've created a tic-tac-toe game that:

* Lets you play tic-tac-toe,
* Indicates when a player has won the game,
* Stores a game's history as a game progresses,
* Allows players to review a game's history and see previous versions of a game's board.

Nice work! We hope you now feel like you have a decent grasp on how React works.

Check out the final result here: **[Final Result](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**.

If you have extra time or want to practice your new React skills, here are some ideas for improvements that you could make to the tic-tac-toe game which are listed in order of increasing difficulty:

1. Display the location for each move in the format (col, row) in the move history list.
2. Bold the currently selected item in the move list.
3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
4. Add a toggle button that lets you sort the moves in either ascending or descending order.
5. When someone wins, highlight the three squares that caused the win.
6. When no one wins, display a message about the result being a draw.

Throughout this tutorial, we touched on React concepts including elements, components, props, and state. For a more detailed explanation of each of these topics, check out [the rest of the documentation](/docs/hello-world.html). To learn more about defining components, check out the [`React.Component` API reference](/docs/react-component.html).
