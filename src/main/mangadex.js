// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.org/',
  language: ['English'],
  category: 'manga',
  waitEle: '.total-pages',
  waitAttr: ['.reader-image-wrapper img', 'src'],
  run() {
    let api = null;
    const url = `https://mangadex.org/api/chapter/${location.pathname.match(/[0-9]+/)[0]}`;
    $.ajax({
      type: 'GET',
      url,
      async: false,
      success(res) {
        api = res;
      },
    });
    return {
      title: $('title').text().replace(' - MangaDex', ''),
      series: $('.manga-link').attr('href'),
      quant: api.page_array.length,
      prev: $('.chapter-link-left').attr('href'),
      next: $('.chapter-link-right').attr('href'),
      listImages: api.page_array.map(img => `${api.server + api.hash}/${img}`),
    };
  },
};
