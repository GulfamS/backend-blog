let headlines = data.headlines;
    let keys = Object.keys(headlines[0]).join(",")
    console.log(keys)
    return [headlines, keys]