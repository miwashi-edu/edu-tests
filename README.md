# edu-tests
[Jest](https://jestjs.io/docs/getting-started)
[Jest Runner Groups](https://www.npmjs.com/package/jest-runner-groups)
[Jest Matchers](https://jestjs.io/docs/using-matchers)
[SuperTest](https://www.npmjs.com/package/supertest)
[API Testing - consumer tests](https://medium.com/@iamfaisalkhatri/api-testing-using-supertest-ea37522fa329)

## Prepare

```bash
cd ~
cd ws
git clone https://github.com/miwashi-edu/edu-tests.git
cd edu-tests
npm init -y
npm install jest supertest --save-dev
mkdir __tests__
touch ./__tests__/{unit_tests.js,component_tests.js,integration_tests.js,consumer_tests.js}
touch {.env,.env.test}
npm install -D jest
npm install -D jest-runner-groups
npm install -D supertest
npm pkg set scripts.test="jest  --group=-component --group=-integration --group=-consumer"
npm pkg set scripts.test:component="jest --group=component"
npm pkg set scripts.test:integration="jest --group=integration"
npm pkg set scripts.test:consumer="jest --group=consumer"
npm pkg set jest.runner="groups"
mkdir src
```

### Add fake-backend dependencies

```bash
npm install dotenv
npm install express
npm install swagger-jsdoc
npm install swagger-ui-express
```

## ./__tests__/unit_tests.js

```bash
cd ~
cd ws
cd edu-tests
cat > ./__tests__/unit_tests.js << 'EOF'
/**
 * @group unit
 */

describe('jest', () => {
  describe('unit test', () => {
    it('should work', () => {
      expect(true).toBe(true);
    });
  });
});
EOF
```

## ./__tests__/component_tests.js

```bash
cd ~
cd ws
cd edu-tests
cat > ./__tests__/component_tests.js << 'EOF'
/**
 * @group component
 */

describe('jest', () => {
  describe('unit test', () => {
    it('should work', () => {
      expect(true).toBe(true);
    });
  });
});
EOF
```

## ./__tests__/integration_tests.js

```bash
cd ~
cd ws
cd edu-tests
cat > ./__tests__/integration_tests.js << 'EOF'
/**
 * @group integration
 */

describe('jest', () => {
  describe('unit test', () => {
    it('should work', () => {
      expect(true).toBe(true);
    });
  });
});
EOF
```

## ./__tests__/consumer_tests.js

```bash
cd ~
cd ws
cd edu-tests
cat > ./__tests__/consumer_tests.js << 'EOF'
/**
 * @group consumer
 */

describe('jest', () => {
  describe('unit test', () => {
    it('should work', () => {
      expect(true).toBe(true);
    });
  });
});
EOF
```

