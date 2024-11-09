'use client';

import { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';

const SelectedGeo = ({ sgg }: { sgg: string }) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetch(`/geo/seoul_${sgg}.geojson`)
        .then((response) => response.json())
        .then((data) => setGeoData(data))
        .catch((error) => console.error('GeoJSON data loading error:', error));
    }, 100);

    return () => {
      clearTimeout(debounce);
      setGeoData(null);
    };
  }, [sgg]);

  if (!geoData || !sgg) {
    return null;
  }

  return (
    <>
      {/* 지도 영역 */}
      <GeoJSON
        data={geoData}
        style={{
          color: '#F0F0F0',
          fillColor: '#06E5AD',
          fillOpacity: 1,
        }}
      />
    </>
  );
};

export default SelectedGeo;
