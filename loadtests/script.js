import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',

  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<300'], // 95% of requests should be below 300ms
  },

  ext: {
    loadimpact: {
      // ProjectName in K6: Crytera-Staging
      projectID: 3661438,
      // Test runs with the same name groups test runs together
      name: 'templateapi'
    },
    distribution: {
      private: {
        loadZone: 'amazon:us:private load zone',
        percent: 100,
      },
    },
  }
};

export default function() {
  // Only use Public IP/Endpoint to load test
  // https://community.grafana.com/t/getting-error-in-logs-ip-is-in-a-blacklisted-range/99622/9
  // PrivateIP 10.0.0.0/8 blocked by default in k6 cloud, 
  // since there is no reason that load tests from users will need to hit our own(K6) private cloud IPs
  const res = http.get('https://stag-templateapi.crytera.com/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}