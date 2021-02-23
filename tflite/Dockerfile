FROM tensorflow/tensorflow:devel
RUN git -C /tensorflow_src pull
RUN git clone https://github.com/google/mediapipe.git /mediapipe_src
RUN cd /tensorflow_src && git checkout a00ba6e4a20d941eb52ea68525f402c260cea2df
RUN sed -i 's/"crosstool_top": "\/\/external:android\/emscripten"/"crosstool_top": "\/\/toolchain\/emscripten"/' /tensorflow_src/tensorflow/BUILD \
  && sed -i '/":tvos_arm64": COMMON_SRCS + MACH_SRCS + MACH_ARM_SRCS,/a ":emscripten_wasm": COMMON_SRCS + EMSCRIPTEN_SRCS,' /tensorflow_src/third_party/cpuinfo/BUILD.bazel