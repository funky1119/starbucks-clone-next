# starbucks-clone-next

### google font 사용

- globals.scss에 import 하여 사용

  에)

  ```
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");
  ```

### google material icon을 next에서 사용하는 방법

1. Head/next 사용하지 말고 일반 head 태그 사용

   에)

   ```
   RootLayout.tsx

    <head>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    </head>
   ```

2. next 의 Metadata 사용

```
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";

export interface CustomIconDescriptorType extends IconDescriptor {
  precedence?: string;
}

const icon: CustomIconDescriptorType = {
  rel: "stylesheet",
  url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
  precedence: "default",
};

export const metadata: Metadata = {
  ...
  icons: {
    other: icon
  }
}

```

### CSS 참고

1. position: absolute 는 상위 태그에
   position: relative 가 있어야 해당 태그 안에 배치가 된다.
2. position: absolute 일 때, top:0, bottom: 0, margin: auto 0; 으로 하면 수평 정렬이 된다. (단, 높이 값 존재할 경우에만)
3. position: absolute 일 때, left:0, right: 0, margin: 0 auto; 으로 하면 수평 정렬이 된다. (단, 넓이 값 존재할 경우에만)
