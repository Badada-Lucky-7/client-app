'use client';

import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { SggType } from '@/types/Geo';

import GeoJsonLayer from './GeoJsonLayer';
import SeoulPopup from './SeoulPopup';

import { romanizeAddress } from '@/utils/i11n';
import { Typography } from '@mui/material';
import SelectedGeo from './SelectedGeo';

import 'leaflet/dist/leaflet.css';
import './SeoulMap.css';

const center: LatLngExpression = [37.5665, 126.978]; // 서울의 위도와 경도

const SeoulMap = () => {
  const [sgg, setSgg] = useState<SggType | null>(null);

  return (
    <div className="seoul-map-layout">
      <div className="seoul-map-sticky">
        <div className="seoul-map-container">
          <MapContainer
            center={center}
            zoom={11}
            style={{ height: '600px', width: '100%' }}
            zoomControl={false} // 줌 컨트롤 비활성화
            scrollWheelZoom={false} // 스크롤 줌 비활성화
            doubleClickZoom={false} // 더블 클릭 줌 비활성화
            dragging={false} // 지도 드래그 비활성화
            touchZoom={false} // 모바일 터치 줌 비활성화
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <GeoJsonLayer sgg={sgg} onChange={setSgg} />
            {sgg && <SelectedGeo sgg={sgg.sgg} />}

            {sgg && (
              <SeoulPopup
                style={{
                  top: sgg.center[0],
                  left: sgg.center[1],
                }}
              >
                <Typography variant="h4">{romanizeAddress(sgg.sggnm)}</Typography>
                <br />
                <Typography variant="h5">{`(${sgg.sggnm})`}</Typography>
              </SeoulPopup>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SeoulMap;
