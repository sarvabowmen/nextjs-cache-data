export const getTime = async () => {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Salta', { cache: 'force-cache' , next: { tags: ['collection'] } });
    return await response.json();
  };
