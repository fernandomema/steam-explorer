const generateUsers = async function(params) {
    let res = await fetch('https://store.steampowered.com/api/appdetails?appids='+params.slug, {
			method: 'GET'
	})
    res = res.json();
    return res;
};

export async function get({ params }) {
  return {
    body: await generateUsers(params),
  };
}