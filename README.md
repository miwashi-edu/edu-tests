# edu-tests

## Prepare

```bash
cd ~
cd ws
mkdir edu-tests && cd edu-tests
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

## ./__tests__/integration_tests.js

```bash
cd ~
cd ws
cd edu-tests
cat > ./__tests__/integration_tests.js << 'EOF'
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

## ./__tests__/consumer_tests.js

```bash
cd ~
cd ws
cd edu-tests
cat > ./__tests__/consumer_tests.js << 'EOF'
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

