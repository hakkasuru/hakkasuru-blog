import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface TravelLocation {
  title: string;
  location: string;
  country: string;
  coordinates: { lat: number; lng: number };
  coverImage?: string;
  slug: string;
  excerpt: string;
}

interface Props {
  locations: TravelLocation[];
  token: string;
}

export default function TravelMap({ locations, token }: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [105, 20],
      zoom: 2,
      attributionControl: false,
    });

    map.current.on("load", () => {
      map.current?.resize();
    });

    map.current.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-left"
    );

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    for (const loc of locations) {
      const popupContent = `
        <div style="max-width:200px;font-family:Inter,sans-serif">
          ${loc.coverImage ? `<img src="${loc.coverImage}" alt="${loc.title}" style="width:100%;height:120px;object-fit:cover;border-radius:6px;margin-bottom:8px" />` : ""}
          <h3 style="margin:0 0 4px;font-size:14px;font-weight:600;color:#1c1917">${loc.title}</h3>
          <p style="margin:0 0 8px;font-size:12px;color:#57534e;line-height:1.4">${loc.excerpt}</p>
          <a href="/travel/${loc.slug}" style="font-size:12px;color:#f97316;text-decoration:none;font-weight:500">View trip &rarr;</a>
        </div>
      `;

      const el = document.createElement("div");
      el.style.width = "24px";
      el.style.height = "24px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = "#f97316";
      el.style.border = "3px solid white";
      el.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
      el.style.cursor = "pointer";

      new mapboxgl.Marker(el)
        .setLngLat([loc.coordinates.lng, loc.coordinates.lat])
        .setPopup(new mapboxgl.Popup({ offset: 15 }).setHTML(popupContent))
        .addTo(map.current);
    }

    return () => {
      map.current?.remove();
    };
  }, [locations, token]);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "350px", borderRadius: "12px" }}
    />
  );
}
