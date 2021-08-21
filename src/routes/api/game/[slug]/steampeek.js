import {JSDOM} from 'jsdom';

const generateUsers = async function(params) {
    let res = await fetch('https://steampeek.hu/?appid='+params.slug, {
			method: 'GET'
	})
  const dom = new JSDOM(await res.text());
  var similarGames = [];
  console.log(dom.window.document.querySelectorAll("#lister_result_container article"));
  dom.window.document.querySelectorAll("#lister_result_container article").forEach(function(similarGame) {
    similarGames.push({
      name: similarGame.querySelector('h4').textContent,
      image: similarGame.querySelector('[data-screenshotsprev]').getAttribute('data-screenshotsprev')
    });
  });
  return similarGames;
  //console.log(dom.window.document.querySelector("p").textContent);
  //console.log(res);
};

export async function get({ params }) {
  return {
    body: await generateUsers(params),
  };
}