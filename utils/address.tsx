export const shortenAddress = (address:string) => {
    if (address.length <= 24) {
      return address;
    }
  
    const shortenedAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    return shortenedAddress;
  };