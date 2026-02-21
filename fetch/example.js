const fetchDownload = async () => {
  console.log('fetchDownload start', new Date().getTime());
  try {
       const resp = await fetch('https://google.com',{mode: 'no-cors'});
  } catch (e) {
    console.log('error', e)
  }
  console.log('fetchDownload   end', new Date().getTime());
}



console.log('start', new Date().getTime());
fetchDownload();
console.log('  end', new Date().getTime());