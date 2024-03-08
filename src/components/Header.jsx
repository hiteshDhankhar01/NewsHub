import { useEffect, useState } from 'react';

import Home from './Home';
import logo from '../assets/logo.png'

function Header() {
    const [country, setCountry] = useState("in");
    const [mediaType, setMediaType] = useState("general");
    const [newsData, setNewsData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const pageSize = 15

    const countries = [
        { code: 'ae', name: 'United Arab Emirates' },
        { code: 'ar', name: 'Argentina' },
        { code: 'at', name: 'Austria' },
        { code: 'au', name: 'Australia' },
        { code: 'be', name: 'Belgium' },
        { code: 'bg', name: 'Bulgaria' },
        { code: 'br', name: 'Brazil' },
        { code: 'ca', name: 'Canada' },
        { code: 'ch', name: 'Switzerland' },
        { code: 'cn', name: 'China' },
        { code: 'co', name: 'Colombia' },
        { code: 'cu', name: 'Cuba' },
        { code: 'cz', name: 'Czech Republic' },
        { code: 'de', name: 'Germany' },
        { code: 'eg', name: 'Egypt' },
        { code: 'fr', name: 'France' },
        { code: 'gb', name: 'United Kingdom' },
        { code: 'gr', name: 'Greece' },
        { code: 'hk', name: 'Hong Kong' },
        { code: 'hu', name: 'Hungary' },
        { code: 'id', name: 'Indonesia' },
        { code: 'ie', name: 'Ireland' },
        { code: 'il', name: 'Israel' },
        { code: 'in', name: 'India' },
        { code: 'it', name: 'Italy' },
        { code: 'jp', name: 'Japan' },
        { code: 'kr', name: 'South Korea' },
        { code: 'lt', name: 'Lithuania' },
        { code: 'lv', name: 'Latvia' },
        { code: 'ma', name: 'Morocco' },
        { code: 'mx', name: 'Mexico' },
        { code: 'my', name: 'Malaysia' },
        { code: 'ng', name: 'Nigeria' },
        { code: 'nl', name: 'Netherlands' },
        { code: 'no', name: 'Norway' },
        { code: 'nz', name: 'New Zealand' },
        { code: 'ph', name: 'Philippines' },
        { code: 'pl', name: 'Poland' },
        { code: 'pt', name: 'Portugal' },
        { code: 'ro', name: 'Romania' },
        { code: 'rs', name: 'Serbia' },
        { code: 'ru', name: 'Russia' },
        { code: 'sa', name: 'Saudi Arabia' },
        { code: 'se', name: 'Sweden' },
        { code: 'sg', name: 'Singapore' },
        { code: 'si', name: 'Slovenia' },
        { code: 'sk', name: 'Slovakia' },
        { code: 'th', name: 'Thailand' },
        { code: 'tr', name: 'Turkey' },
        { code: 'tw', name: 'Taiwan' },
        { code: 'ua', name: 'Ukraine' },
        { code: 'us', name: 'United States' },
        { code: 've', name: 'Venezuela' },
        { code: 'za', name: 'South Africa' }
    ];

    const newsTypes = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

    useEffect(() => {
        fetchNews()
    }, [])

    useEffect(() => {
        if (page !== 1) {
            fetchNews()
        }

    }, [page])

    useEffect(() => {
        if (newsData.length === 0) {
            fetchNews()
        }
    }, [newsData, country, mediaType])

    // console.log(newsData.length)

    const fetchNews = async () => {

        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${mediaType}&apiKey=7cd22a9824d44a3a936e38a07ba761d8&page=${page}&pageSize=${pageSize}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setNewsData(prevNewsData => [...prevNewsData, ...data.articles]);
            const totalResult = data.totalResults;
            const totalPage = Math.ceil(totalResult / pageSize);
            if (page + 1 >= totalPage) {
                setPage(prevPage => prevPage + 1);
            } else {
                setPage(1);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCountryChange = (event) => {
        setNewsData([]);
        setCountry(event.target.value);
    };

    const handleMediaTypeChange = (event) => {
        setNewsData([]);
        setMediaType(event.target.value);
    };

    return (
        <>
            <header className="flex justify-between items-center px-4 py-3 bg-green-600 text-white">
                {/* Logo on the left */}
                <div className="flex items-center">
                    <img src={logo} alt="NewsHub" className="h-14 mr-2" />
                    <h1 className="text-lg font-bold text-[1.5rem] cursor-default">NewsHub</h1>

                </div>

                {/* Select elements for country and type of news on the right */}
                <div className="flex items-center">
                    <select
                        value={country}
                        onChange={handleCountryChange}
                        className="mr-2 bg-green-500 text-white px-3 py-2 rounded-md"
                        style={{ maxHeight: "10rem", overflowY: "scroll" }}
                    >
                        {countries.map(country => (
                            <option
                                key={country.code}
                                value={country.code}
                            >
                                {country.name}
                            </option>
                        ))}
                    </select>
                    <select value={mediaType} onChange={handleMediaTypeChange} className="bg-green-500 text-white px-3 py-2 rounded-md">
                        {newsTypes.map(newsType => (
                            <option key={newsType} value={newsType}>{newsType}</option>
                        ))}
                    </select>
                </div>
            </header>
            {/* <Home country={country} mediaType={mediaType} /> */}

            <Home data={newsData} loading={loading} />

        </>
    );
}

export default Header;

