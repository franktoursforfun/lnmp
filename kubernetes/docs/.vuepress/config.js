module.exports = {
  title: 'K8s LNMP',
  description: 'Run LNMP On K8s',
  head: [
    []
  ],
  themeConfig: {
    nav: [
      {
        text: '部署',
        link: '/setup/'
      },
      {
        text: '教程',
        link: '/guide/',
      },
      {
        text: '示例',
        link: '/example/',
      },
      {
        text: '插件',
        link: '/addons/',
      },
      {
        text: '日志',
        link: '/log/',
      },
      {
        text: '存储',
        link: '/storage/'
      },
      {
        text: '节点',
        link: '/node/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/khs1994-docker/lnmp-k8s',
      },
      {
        text: 'khs1994.com',
        link: 'https://khs1994.com',
      },
      {
        text: 'Kubernetes 免费实验室',
        link: 'https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61'
      }
    ],
    sidebar: {
      '/guide/': [
        'etcd',
        'endpoints',
        'network',
        'port',
        'ingress-nginx',
        'rollout',
        'secret',
        'helm',
        'kustomize',
        'arm64',
        'virtualbox',
        'podman',
        'kubectl',
        '/resources/deployment',
        '/resources/configMap',
        'mod',
        'ssh',
      ],
      '/setup/': [
        'systemd',
        'coreos',
        'minikube',
        'windows',
        'kubeadm',
        'k3s',
        'rpi',
        'docker-desktop',
        'ha',
      ],
      '/example/': [
        'nginx',
        'php',
      ],
      '/addons/': [
        'coredns',
        'dashboard',
        'efk',
        'metrics-server',
        'registry',
      ],
      "/log/": [
        "mysql",
        "nginx",
        "php",
        "redis",
      ],
      "/storage/": [
        "data",
        "nfs",
        "pv",
        "flexvolume/",
        "csi/",
        "csi/snapshot",
        "storage-classes",
      ],
      "/node/": [
        "kubelet",
        "worker",
        "oci_runtime",
        "cri",
        "cni",
        "crictl",
        {
          title: "master 节点",
          collapsable: false,
          children: [
            "/server/kube-apiserver",
            "/server/kube-controller-manager",
            "/server/kube-scheduler",
          ],
        },
      ],
    },
    sidebarDepth: 1,
  }
}
