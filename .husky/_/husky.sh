mkdir -p .husky/_
echo -e '#!/bin/sh\n\nif [ -z "$husky_skip_init" ]; then\n  debug () {\n    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"\n  }\n\n  readonly hook_name="$(basename "$0")"\n  debug "starting $hook_name..."' > .husky/_/husky.sh
chmod +x .husky/_/husky.sh
