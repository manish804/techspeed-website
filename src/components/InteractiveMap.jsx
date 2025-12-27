import { useEffect, useRef, useState } from 'react'

const POSITION = [45.5152, -122.6784]
const ADDRESS = "1300 SW 6th Ave, Portland, OR 97201"

export default function InteractiveMap({ className = '' }) {
    const mapRef = useRef(null)
    const mapInstanceRef = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (mapInstanceRef.current) return

        const loadMap = async () => {
            const L = await import('leaflet')

            await import('leaflet/dist/leaflet.css')

            if (!mapRef.current || mapInstanceRef.current) return

            const map = L.map(mapRef.current, {
                center: POSITION,
                zoom: 15,
                scrollWheelZoom: false,
                attributionControl: true
            })

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map)

            const customIcon = L.divIcon({
                className: 'custom-marker',
                html: `
                    <div style="
                        width: 40px;
                        height: 40px;
                        background: linear-gradient(135deg, #A855F7 0%, #7C3AED 100%);
                        border-radius: 50% 50% 50% 0;
                        transform: rotate(-45deg);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
                    ">
                        <div style="
                            transform: rotate(45deg);
                            color: white;
                            font-size: 18px;
                        ">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                        </div>
                    </div>
                `,
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40]
            })

            const marker = L.marker(POSITION, { icon: customIcon }).addTo(map)

            marker.bindPopup(`
                <div style="text-align: center; padding: 8px; min-width: 180px;">
                    <strong style="font-size: 14px; color: #2D1B3D;">Suryonex</strong>
                    <br/>
                    <span style="font-size: 12px; color: #666;">${ADDRESS}</span>
                    <br/>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="
                            display: inline-block;
                            margin-top: 8px;
                            padding: 6px 12px;
                            background: #A855F7;
                            color: white;
                            border-radius: 4px;
                            text-decoration: none;
                            font-size: 12px;
                        "
                    >
                        Get Directions
                    </a>
                </div>
            `)

            mapInstanceRef.current = map
            setIsLoaded(true)

            setTimeout(() => {
                map.invalidateSize()
            }, 100)
        }

        loadMap()

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove()
                mapInstanceRef.current = null
            }
        }
    }, [])

    return (
        <div className={`relative rounded-2xl overflow-hidden ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3FF] to-[#E9D5FF] flex items-center justify-center z-10">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-3 border-[#A855F7] border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-gray-600 text-sm">Loading map...</span>
                    </div>
                </div>
            )}
            <div
                ref={mapRef}
                className="w-full h-full min-h-[300px]"
                style={{ zIndex: 1 }}
            />
        </div>
    )
}
